const fs = require('fs');
const PNG = require('pngjs').PNG;
const path = require('path');

const filePath = path.join(__dirname, '..', 'Downloads', 'Gemini_Generated_Image_wlrng1wlrng1wlrn.png');

fs.createReadStream(filePath)
  .pipe(new PNG())
  .on('parsed', function() {
    // Sample background pixel (top-left corner area)
    const x = 5;
    const y = 5;
    const idx = (this.width * y + x) << 2;

    const r = this.data[idx];
    const g = this.data[idx + 1];
    const b = this.data[idx + 2];
    const a = this.data[idx + 3];

    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');

    console.log('Couleur du fond (position 5,5):');
    console.log('RGB:', r, g, b);
    console.log('Alpha:', a);
    console.log('Hex:', hex);
  });
