import Img_Hero from "../assets/img_hero.png"

const Hero = () => {
  return (
    <div id="hero" className="min-h-screen flex items-center justify-center text-center px-6">
      <div className="absolute inset-0 z-0 w-full h-full">
        <img src={Img_Hero} alt="" className="w-full h-full"/>
      </div>
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,1)_100%)] w-full h-full"></div>
      </div>
      <div className="max-w-2xl z-10">
        <h1 className="text-4xl text-neutral-100 md:text-5xl font-bold mb-6">
          {import.meta.env.VITE_APP_NAME}
        </h1>
        <div className="bg-amber-200 px-40 py-1 rounded-2xl"></div>
        <p className="text-neutral-400 text-lg font-sm font-stretch-50% shadow-md shadow-amber-200">
          Drop an image. Instantly processed. See the result. No tweaking. No bluffing. No thinking.
        </p>
      </div>
    </div>
  )
}

export default Hero