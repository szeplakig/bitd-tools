import React from "react";

const ImageEditor = () => {
  const [baseImageData, setBaseImageData] = React.useState(undefined);
  const [_radius, setRadius] = React.useState(5);
  const [_intensity, setIntensity] = React.useState(0.1);

  const getCanvasAndContext = () => {
    const canvas = document.getElementById("outCanvas");
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    return [canvas, ctx];
  };

  const makeGrayscale = () => {
    const [canvas, ctx] = getCanvasAndContext();
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
      const r = imageData.data[i];
      const g = imageData.data[i + 1];
      const b = imageData.data[i + 2];
      const a = imageData.data[i + 3];

      const grayscale = 0.2989 * r + 0.587 * g + 0.114 * b;

      imageData.data[i] = grayscale;
      imageData.data[i + 1] = grayscale;
      imageData.data[i + 2] = grayscale;
      imageData.data[i + 3] = a;
    }

    ctx.putImageData(imageData, 0, 0);
    window.notify("Grayscale done");
  };

  const oilify = (radius = 5, intensityD = 0.2) => {
    const [canvas, ctx] = getCanvasAndContext();

    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var pixels = imageData.data;
    var newImageData = new ImageData(imageData.width, imageData.height);

    // Loop through each pixel and apply the oilify effect
    for (var i = 0; i < pixels.length; i += 4) {
      const intensities = {};
      for (var x = -radius; x <= radius; x++) {
        for (var y = -radius; y <= radius; y++) {
          var pixelIndex = i / 4 + x + y * canvas.width;
          if (pixelIndex >= 0 && pixelIndex < pixels.length / 4) {
            const ri = pixels[pixelIndex * 4];
            const gi = pixels[pixelIndex * 4 + 1];
            const bi = pixels[pixelIndex * 4 + 2];
            const intensity = Math.floor(
              (0.2989 * ri + 0.587 * gi + 0.114 * bi) * intensityD
            );
            if (intensities[intensity] === undefined) {
              intensities[intensity] = { r: 0, g: 0, b: 0, c: 0 };
            }
            intensities[intensity].r += ri;
            intensities[intensity].g += gi;
            intensities[intensity].b += bi;
            intensities[intensity].c += 1;
          }
        }
      }
      let max = null;
      for (const intensity of Object.values(intensities)) {
        if (max === null || max.c < intensity.c) {
          max = intensity;
        }
      }
      const avgR = max.r / max.c;
      const avgG = max.g / max.c;
      const avgB = max.b / max.c;

      newImageData.data[i] = avgR;
      newImageData.data[i + 1] = avgG;
      newImageData.data[i + 2] = avgB;
      newImageData.data[i + 3] = pixels[i + 3];
    }

    ctx.putImageData(newImageData, 0, 0);
    window.notify("Oilify done");
  };

  const resetImage = (image = baseImageData) => {
    if (image !== undefined) {
      const [canvas, ctx] = getCanvasAndContext();
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    }
  };

  const handleFileUpload = (event) => {
    createImageBitmap(event.target.files[0]).then((image) => {
      setBaseImageData(image);
      resetImage(image);
    });
  };
  return (
    <div className="h-full flex">
      <div className="m-auto">
        <input
          className="text-black"
          type="file"
          id="filepicker"
          onChange={handleFileUpload}
        />
        <input
          className="text-black"
          type="number"
          value={_radius}
          min={1}
          max={15}
          step={1}
          onChange={(event) => setRadius(event.target.value)}
        ></input>
        <input
          className="text-black"
          type="number"
          value={_intensity}
          min={0.01}
          max={1}
          step={0.01}
          onChange={(event) => setIntensity(event.target.value)}
        ></input>
        <h1
          className="mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black hover:bg-bitdDarkGray bg-bitdBlack"
          onClick={() => resetImage()}
        >
          Reset
        </h1>
        <h1
          className="mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black hover:bg-bitdDarkGray bg-bitdBlack"
          onClick={() => makeGrayscale()}
        >
          Grayscale
        </h1>
        <h1
          className="mb-5 inline-flex cursor-pointer p-2 rounded shadow-xl border border-black hover:bg-bitdDarkGray bg-bitdBlack"
          onClick={() => oilify(_radius, _intensity)}
        >
          Oilify
        </h1>
        <canvas id="outCanvas"></canvas>
      </div>
    </div>
  );
};

export default ImageEditor;
