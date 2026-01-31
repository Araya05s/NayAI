import { ColorUtils } from "./colorUtils";
import type { RGB } from "./colorUtils";

export class ImageProcessor {
  static applySaturation(
    imageData: ImageData,
    targetSaturation: number,
  ): ImageData {
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const rgb: RGB = {
        r: data[i],
        g: data[i + 1],
        b: data[i + 2]
      };

      const hsl = ColorUtils.rgbToHsl(rgb);

      // Photoshop behavior: replace S only
      hsl.s = Math.min(1, targetSaturation);

      const out = ColorUtils.hslToRgb(hsl);

      data[i]     = out.r;
      data[i + 1] = out.g;
      data[i + 2] = out.b;
    }

    return imageData;
  }
}
