# Isian.io

Landing page for Isian.io

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

Only jQuery and Materialize Icons is delivered through CDN for now.

## Materialize CSS

We use a custom version of Materialize CSS v0.100.2 (with fonts changed to Noto Sans in the vendors' source).
