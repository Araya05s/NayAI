import hint1 from "../assets/hint_1.png"
import hint2 from "../assets/hint_2.png"
import hint3 from "../assets/hint_3.png"

const steps = [
  { id: 1, src: hint1, label: "Artifacts color" },
  { id: 2, src: hint2, label: "Unmatched pixel color" },
  { id: 3, src: hint3, label: "Grainy color" },
];

const Howto = () => {
  return (
    <section
        id="hint" className="bg-neutral-100 text-neutral-900 pt-12">
      <div className="mb-4">
          <h2 className="bg-neutral-300 py-12 text-center text-4xl font-semibold text-neutral-700">
            How to spot AI Image?
          </h2>
        </div>        
        <p className="py-1 text-center text-sm font-semibold text-neutral-700 mb-8 underline underline-offset-4" >
          The image is definitely AI generated if the image has either one or more of the following:
          </p>
        
      <div className=" max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-center gap-24">
        {steps.map(step => (
          <div key={step.id} className="group text-center">
            <div className="relative mx-auto w-44 h-44 rounded-full border border-neutral-300 overflow-hidden transition-transform duration-300 group-hover:scale-110">

              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition pointer-events-none ring-2 ring-white/70 ring-offset-4 ring-offset-neutral-50" />

              <img
                src={step.src}
                alt={step.label}
                className="w-full h-full object-cover rounded-full brightness-125 group-hover:brightness-140 grayscale-20 group-hover:grayscale-0 saturate-80 group-hover:saturate-125 transition duration-300 border-2 border-lime-300"
              />
            </div>

            <p className="mt-6 text-neutral-600 font-medium">
              {step.label}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-lime-300 mt-1 mb-6 py-0.5 px-50"/>
      <div className="py-1 text-center text-sm font-semibold text-neutral-500">
        <p>*Don't forget to zoom in to see better view of the weird pixels.</p>
      </div>
    </section>
  )
}

export default Howto