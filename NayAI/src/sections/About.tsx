import beforeImg from "../assets/img_before.jpeg"
import afterImg from "../assets/img_after.png"

const About = () => {
  return (
    <section
        id="about"
        className="bg-neutral-100 text-neutral-900 py-24"
    >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <div>
            <h2 className="text-4xl font-bold mb-6">
            Instant reveal, zero thinking
            </h2>

            <p className="text-neutral-700 leading-relaxed mb-4">
            This tool applies a carefully designed color treatment
            inspired by professional photo editing workflows.
            </p>

            <p className="text-neutral-700 leading-relaxed">
            No sliders. No presets.  
            Just drop an image and receive the AI revelation result
            in seconds.
            </p>
        </div>

        <div className="about_img_frame">
            <div className="img_reveal">
                <div className="img_layer">
                <img src={beforeImg} alt="Before" className="img_before" />
                <span className="img_label left">Before</span>
                </div>

                <div className="img_layer img_after_layer">
                <img src={afterImg} alt="After" className="img_after" />
                <span className="img_label right">After</span>
                </div>

                <div className="reveal_line" />
            </div>
            </div>

        </div>
    </section>
  )
}

export default About