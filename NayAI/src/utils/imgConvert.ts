import { ImageProcessor } from "./imgProcessor";
import { ColorUtils } from "./colorUtils";

export async function ImgConvert(
    imageSrc: string,
    overlayColor1: string,
    overlayColor2: string
  ): Promise<string> {
    const img = new Image();
  img.src = imageSrc;
  await new Promise(res => (img.onload = res));

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  canvas.width = img.width;
  canvas.height = img.height;

  ctx.drawImage(img, 0, 0);

  ctx.globalAlpha = 0.6;
  ctx.fillStyle = overlayColor1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1;

  const rgb = ColorUtils.hexToRgb(overlayColor2);
  const hsl = ColorUtils.rgbToHsl(rgb);

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  imageData = ImageProcessor.applySaturation(
    imageData,
    hsl.s
  );

  ctx.putImageData(imageData, 0, 0);

  return canvas.toDataURL("image/png");
  }
  