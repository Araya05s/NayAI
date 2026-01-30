import { useState, useRef } from 'react'
import type { DragEvent, ChangeEvent } from 'react';
import "/public/icons/upload.svg"

const Img_Drop = () => {

    const [preview, setPreview] = useState<string | null>(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

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
    <div className="min-h-screen flex items-center px-6">
      <div className="max-w-xl mx-auto w-full text-center">
        <div className='drop-frame'>  
                <div
                onDrop={handleDrop}
                onDragOver={e => {
                    e.preventDefault();
                    setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                className={`drop-zone-visual ${isDragOver ? "drag-active" : ""}`}
                >
                {preview ? (
                    <img
                    src={preview}
                    alt="Preview"
                    className="max-h-64 mx-auto rounded"
                    />
                ) : (
                    <>
                    <img src="/public/icons/upload.svg" alt="Upload" style={{ width: '100px', height: '100px' }} className='mx-auto text-4xl mb-4 w-14 h-14 text-neutral-400'/>

                    <p className="text-lg font-medium">
                        Drop your image here
                    </p>
                    <p className="text-sm text-neutral-400 mt-1">
                        PNG, JPG, or WEBP
                    </p>

                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="mt-6 px-6 py-2 rounded-md bg-indigo-500 text-white
                                hover:bg-indigo-400 transition"
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
                    </>
                )}
                </div>

                {preview && (
                <button
                    className="mt-6 px-6 py-2 bg-white text-black rounded
                            hover:bg-neutral-200 transition"
                >
                    Download Result
                </button>
                )}
            </div>
        </div>
    </div>
  )
}

export default Img_Drop