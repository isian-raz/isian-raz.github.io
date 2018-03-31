# Isian.io

Landing page for Isian.io

## Setting Up

This project is set up as simple static pages with no pre-processors or transpilers. Simply open `index.html` and you're good to go. 👍

## Project Structure

```
isian.io
 |
 \-- css
 |
 \-- fonts
 |  |
 |  \-- noto_sans
 |
 \-- img
 |
 \-- index.html
 |
 \-- README.md
```

These may come as a surprise: 🙊

* `css`: Where we store stylesheets (vendors and our own) - minify vendors', keep our own readable.
* `js`: Where we store javascript files (vendors and our own) - minify vendors', keep our own readable.
* `fonts`: Where we store fonts - Noto Sans is required for Materialize CSS.
* `img`: Where we store images (and that one video for the hero section) - make sure they're optimized for page loads.

We prefer to keep copy of vendors' assets instead of CDN for performance and reliability issues.

## Materialize CSS

We use a custom version of Materialize CSS v0.100.2 (with fonts changed to Noto Sans in the vendors' source).

Refer documentation [here](http://archives.materializecss.com/0.100.2/).
