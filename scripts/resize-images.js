const { existsSync } = require("fs");
const { unlink } = require("fs").promises;
const { resolve, dirname } = require("path");
const sharp = require("sharp");
const sketches = require("./get-sketches");

const thumbs = [];

try {
  Promise.all(
    sketches.map(async ({ url }) => {
      const thumb = resolve(__dirname, "../dist", url, "thumb.png");
      if (existsSync(thumb)) {
        thumbs.push(thumb);
        await sharp(thumb)
          .resize(440)
          .toFile(resolve(dirname(thumb), "twitter.png"));
        await sharp(thumb)
          .resize(843, 504, { fit: "cover" })
          .toFile(resolve(dirname(thumb), "facebook.png"));
        await sharp(thumb)
          .resize({ height: 170 * 2 })
          .toFile(resolve(dirname(thumb), "thumb@2x.png"));
        await sharp(thumb)
          .resize({ height: 170 })
          .toFile(resolve(dirname(thumb), "thumb@1x.png"));
        await unlink(thumb);
      }
    })
  );
} catch (error) {
  throw error;
}
