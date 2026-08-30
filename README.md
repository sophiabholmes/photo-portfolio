# Sophia Bennett Holmes — Photo Portfolio

A tiny, static GitHub Pages portfolio built to match the provided reference as closely as possible: cream background, hairline blue frame, FT88 pixel type, TAY Big Bird navigation, fixed left-side categories, and a photographic area on the right.

## What to edit

Almost everything you will regularly edit lives in `photos.js`.

### Add a photo

Put an image into one of the folders:

- `images/home/`
- `images/bts/`
- `images/events/`
- `images/portraits/`
- `images/objects/`

Then add its path to `photos.js`, for example:

```js
{ src: 'images/portraits/01.jpg', alt: 'Portrait', caption: 'New York, 2026' },
```

The homepage is intentionally a separate selection. You can pick 10–30 images for `home` without duplicating the full category archives.

## Lots and lots of photos

GitHub Pages is a static site, so the browser cannot automatically ask a folder which files exist. This starter therefore uses `photos.js` as the photo index.

For a large archive, keep the image filenames simple and organised. Web-sized JPEGs/WebPs are much better than uploading full-resolution camera originals.

## Fonts

The CSS loads FT88 from a public libre-font stylesheet. The exact TAY Big Bird webfont needs to be supplied from a licensed copy and placed in `fonts/TAY-Big-Bird.woff2`.

## GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder, including `index.html` at the top level.
3. Open the repository's **Settings**.
4. Open **Pages** in the left-hand menu.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose the `main` branch and the `/ (root)` folder.
7. Click **Save**.
8. Wait a minute or two. GitHub will show the live site URL in the Pages screen.
