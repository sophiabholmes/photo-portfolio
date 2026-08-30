FONT SETUP

FT88
FT88 is loaded by style.css from the libre/open-source Velvetyne Degheest font family.
The site uses it for the pixel-style name and corner text.

TAY BIG BIRD
TAY Big Bird is a commercial font by Taylor Penton. It is NOT included in this folder.
To use the exact typeface, export/download the webfont version you have licensed and place it here as:

    TAY-Big-Bird.woff2

Then add this to style.css near the top, before the existing styles:

@font-face {
  font-family: 'TAY Big Bird';
  src: url('fonts/TAY-Big-Bird.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

The CSS already asks for 'TAY Big Bird', so once that file exists, the correct font will be used automatically.
