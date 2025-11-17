const fs = require('fs');
const PNG = require('pngjs').PNG;
const path = require('path');

const filePath = path.join(__dirname, '..', 'Downloads', 'Gemini_Generated_Image_wlrng1wlrng1wlrn.png');

fs.createReadStream(filePath)
  .pipe(new PNG())
  .on('parsed', function() {
    // Sample multiple pixels from background
    const samples = [
      {x: 5, y: 5},
      {x: 10, y: 10},
      {x: 20, y: 20}
    ];

    samples.forEach(({x, y}) => {
      const idx = (this.width * y + x) << 2;
      const r = this.data[idx];
      const g = this.data[idx + 1];
      const b = this.data[idx + 2];
      const a = this.data[idx + 3];
      const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
      console.log(`Position (${x},${y}): RGB(${r},${g},${b}) Alpha:${a} = ${hex}`);
    });
  });
