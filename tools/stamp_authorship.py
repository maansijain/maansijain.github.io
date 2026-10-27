#!/usr/bin/env python3
"""Stamp authorship and licensing metadata into every image on maansijain.com.

Run from the repo root:  python3 tools/stamp_authorship.py
Re-run it after adding new images (it is safe to run more than once).
Needs:  pip install pyexiv2

Writes (EXIF + IPTC + XMP where the format allows):
  creator        maansi jain
  copyright      © maansi jain
  credit line    maansi jain / maansijain.com
  licence page   https://maansijain.com/license/   (Google Images "Licensable" badge)
  AI use         allowed, with credit to maansi jain (IPTC PLUS data-mining field)
  title          the work's title, taken from the site's structured data / alt text
"""
import glob, html, json, os, re, sys
import pyexiv2

CREATOR = "maansi jain"
COPYRIGHT = "© maansi jain"
CREDIT = "maansi jain / maansijain.com"
SITE = "https://maansijain.com/"
LICENSE_URL = "https://maansijain.com/license/"
AI_FLAG = "http://ns.useplus.org/ldf/vocab/DMI-ALLOWED"
AI_NOTE = "AI and machine use permitted with credit to maansi jain (maansijain.com). Licences: " + LICENSE_URL
EXTS = (".jpg", ".jpeg", ".png", ".webp")
FULL_DIRS = ["images", "images/works", "images/editions", "assets/artwork-thumbnails"]
COMPACT_DIRS = ["assets/archive-thumbnails"]  # tiny files: EXIF only, keeps them small


def titles_from_site():
    """Map image path -> (title, description) using JSON-LD names and <img> alt text."""
    titles, alts = {}, {}
    for page in glob.glob("**/*.html", recursive=True):
        s = open(page, encoding="utf-8").read()
        for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', s, re.S):
            try:
                data = json.loads(block)
            except ValueError:
                continue
            stack = [data]
            while stack:
                o = stack.pop()
                if isinstance(o, dict):
                    img, name = o.get("image"), o.get("name")
                    if isinstance(img, str) and isinstance(name, str) and o.get("@type") in ("VisualArtwork", "Photograph", "Sculpture", "Painting", "ImageObject"):
                        year = o.get("dateCreated", "")
                        titles[img.replace(SITE, "")] = f"{name}, {year}".strip(", ")
                    stack.extend(o.values())
                elif isinstance(o, list):
                    stack.extend(o)
        for src, alt in re.findall(r'<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"', s):
            alts.setdefault(src.lstrip("/"), html.unescape(alt))
    return titles, alts


def stamp(path, title, desc, compact):
    im = pyexiv2.Image(path)
    try:
        exif = {"Exif.Image.Artist": CREATOR, "Exif.Image.Copyright": f"{COPYRIGHT} · {LICENSE_URL}"}
        if not compact and title:
            exif["Exif.Image.ImageDescription"] = title
        im.modify_exif(exif)
        if compact:
            return
        xmp = {
            "Xmp.dc.creator": [CREATOR],
            "Xmp.dc.rights": {'lang="x-default"': COPYRIGHT},
            "Xmp.photoshop.Credit": CREDIT,
            "Xmp.photoshop.Source": SITE,
            "Xmp.xmpRights.Marked": "True",
            "Xmp.xmpRights.WebStatement": LICENSE_URL,
            "Xmp.xmpRights.UsageTerms": {'lang="x-default"': AI_NOTE},
            "Xmp.plus.DataMining": AI_FLAG,
            "Xmp.plus.OtherConstraints": {'lang="x-default"': AI_NOTE},
        }
        if title:
            xmp["Xmp.dc.title"] = {'lang="x-default"': title}
        if desc:
            xmp["Xmp.dc.description"] = {'lang="x-default"': desc}
        im.modify_xmp(xmp)
        # Licensor / copyright-owner / creator-contact are structures that
        # pyexiv2 can't set directly, so add them to the raw XMP packet.
        raw = im.read_raw_xmp()
        raw = re.sub(r"<plus:(Licensor|CopyrightOwner)>.*?</plus:\1>|<Iptc4xmpCore:CreatorContactInfo[^>]*/>|<Iptc4xmpCore:CreatorContactInfo.*?</Iptc4xmpCore:CreatorContactInfo>", "", raw, flags=re.S)
        structs = (
            '<plus:Licensor><rdf:Seq><rdf:li rdf:parseType="Resource">'
            f"<plus:LicensorName>{CREATOR}</plus:LicensorName><plus:LicensorURL>{LICENSE_URL}</plus:LicensorURL>"
            "</rdf:li></rdf:Seq></plus:Licensor>"
            '<plus:CopyrightOwner><rdf:Seq><rdf:li rdf:parseType="Resource">'
            f"<plus:CopyrightOwnerName>{CREATOR}</plus:CopyrightOwnerName>"
            "</rdf:li></rdf:Seq></plus:CopyrightOwner>"
            '<Iptc4xmpCore:CreatorContactInfo xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" rdf:parseType="Resource">'
            f"<Iptc4xmpCore:CiUrlWork>{SITE}</Iptc4xmpCore:CiUrlWork></Iptc4xmpCore:CreatorContactInfo>"
        )
        raw = raw.replace("</rdf:Description>", structs + "</rdf:Description>", 1)
        im.modify_raw_xmp(raw)
        if not path.lower().endswith(".webp"):  # WebP has no IPTC block; XMP covers it
            iptc = {
                "Iptc.Application2.Byline": [CREATOR],
                "Iptc.Application2.Copyright": COPYRIGHT,
                "Iptc.Application2.Credit": CREDIT,
                "Iptc.Application2.Source": SITE,
            }
            if title:
                iptc["Iptc.Application2.ObjectName"] = title[:64]
            im.modify_iptc(iptc)
    finally:
        im.close()


def main():
    titles, alts = titles_from_site()
    done = errors = 0
    for compact, dirs in ((False, FULL_DIRS), (True, COMPACT_DIRS)):
        for d in dirs:
            for f in sorted(glob.glob(os.path.join(d, "*"))):
                if not f.lower().endswith(EXTS):
                    continue
                key = f.replace(os.sep, "/")
                title = titles.get(key)
                desc = alts.get(key)
                try:
                    stamp(f, title, desc, compact)
                    done += 1
                except Exception as e:  # keep going; report at the end
                    errors += 1
                    print("skipped", f, "-", e, file=sys.stderr)
    print(f"stamped {done} images, {errors} skipped")


if __name__ == "__main__":
    main()
