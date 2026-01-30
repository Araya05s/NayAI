import { NAV_LINKS } from '../config/navigation'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-2xl border-2 border-neutral-800'>
        <div className='max-w-10xl mx-auto px-12 h-18 flex items-center justify-between'>
            <a href="">
                <span className='font-semibold text-3xl tracking-wide'>
                    NayAI
                </span>
            </a>

            <div className="flex gap-6 text-sm">
            {NAV_LINKS.map(link => (
                <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white transition"
                >
                {link.name}
                </a>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Navbar