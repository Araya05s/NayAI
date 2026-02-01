import { useState, useRef } from 'react'
import type { DragEvent, ChangeEvent } from 'react';
import { ImgConvert } from '../utils/imgConvert';

const Img_Drop = () => {

    const [preview, setPreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isProcessing, setProcessing] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    async function handleProcess() {
        if (!preview) return;
        setProcessing(true);
    
        const output = await ImgConvert(
          preview,
          "#000000", // Black Additional layer color
          "#5c1566"  // Purple saturarion layer color
        );
    
        setResult(output);
        setProcessing(false);
      }
    
      function handleDownload() {
        if (!result) return;
        const link = document.createElement("a");
        link.href = result;
        link.download = "processed-image.png";
        link.click();
      }

    function handleFile(file: File) {
        if (!file.type.startsWith("image/")) return;
        setPreview(URL.createObjectURL(file));
      }
    
      function handleDrop(e: DragEvent<HTMLDivElement>) {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        if (file) handleFile(file);
      }
    
      function handleBrowse(e: ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) handleFile(file);
      }

  return (
    <div id='upload' className="min-h-screen flex items-center px-6">
      <div className="max-w-xl mx-auto w-full text-center">
        <p className='text-neutral-700 text-4xl font-semibold pb-4'>
          Upload and process your image
        </p>
        <p className='text-neutral-400 text-xl font-semibold pb-12'>
          Upload and process your image to see the result
        </p>
      <div className="drop-frame">
        <div
            onDrop={handleDrop}
            onDragOver={e => {
            e.preventDefault();
            setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            className={`drop-zone-visual ${isDragOver ? "drag-active" : ""}`}
        >
            {result ? (
            <img
                src={result}
                alt="Result"
                className="max-h-64 mx-auto rounded"
            />
            ) : preview ? (
            <img
                src={preview}
                alt="Preview"
                className="max-h-64 mx-auto rounded"
            />
            ) : (
            <>
                <img
                src="/icons/upload.svg"
                alt="Upload"
                className="mx-auto mb-4 w-20 h-20 text-neutral-400"
                />

                <p className="text-lg text-neutral-600 font-medium">
                Drop your image here, or
                </p>
                <button
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 px-6 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-400 transition"
                >
                Browse files
                </button>

                <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleBrowse}
                className="hidden"
                />
                <p className="text-sm text-neutral-400 mt-1">
                PNG, JPG, or WEBP
                </p>
            </>
            )}
        </div>

        {preview && !result && (
            <button
            onClick={handleProcess}
            disabled={isProcessing}
            className="mt-6 px-6 py-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-700 transition"
            >
            {isProcessing ? "Processing..." : "Upload"}
            </button>
        )}

        {result && (
            <button
            onClick={handleDownload}
            className="mt-6 px-6 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-400 transition"
            >
            Download the result
            </button>
        )}
        </div>
        </div>
    </div>
  )
}

export default Img_Drop