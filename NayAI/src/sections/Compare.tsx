import OriginalAIimage from "../assets/original_ai_image.png"
import AIimagedetector from "../assets/ai_detector_result.png"
import NayAIreveal from "../assets/nayai_result.png"

const Compare = () => {
  return (
    <section
        id="about" className="bg-neutral-100 text-neutral-900 py-24"
    >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

            <div>
                <h2 className="text-4xl font-bold mb-6">
                Why this tool?
                </h2>

                <p className="text-neutral-700 leading-relaxed mb-4">
                Most image processing tools jump straight to the result. You see a “before” and an “after,” but the transformation itself remains invisible from behind — a black box of original image, graphs, and "yes, this is AI".
                </p>

                <p className="text-neutral-700 leading-relaxed">
                But NayAI shows the result <b>differently.</b>
                </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="flex-1 space-y-12">
                    <div className="scale-100 hover:scale-110 transition duration-300">
                        <img
                            src={OriginalAIimage}
                            alt="Original AI image"
                            className="rounded-lg shadow-sm border"
                        />
                        <p className="mt-3 text-sm text-neutral-500">
                            Original AI Image
                        </p>
                    </div>

                    <div className="scale-100 hover:scale-110 transition duration-300">
                        <img
                            src={AIimagedetector}
                            alt="Other AI detector result"
                            className="rounded-lg shadow-sm border"
                        />
                        <p className="mt-3 text-sm text-neutral-500">
                            Most image processing tools show only the result.
                        </p>
                    </div>
                </div>

                <div className="flex-1 lg:mt-12 scale-100 hover:scale-110 transition duration-300">
                        <div className="bg-neutral-50 border rounded-xl p-6 shadow-sm">
                            <img
                                src={NayAIreveal}
                                alt="NayAI result"
                                className="rounded-lg"
                            />
                            <div className="mt-4">
                                <h3 className="text-lg font-medium text-neutral-900">
                                    While NayAI,
                                </h3>
                                <p className="mt-2 text-sm text-neutral-600">
                                    shows why the result happens directly in the image.
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Compare