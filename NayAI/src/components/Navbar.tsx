import { NAV_LINKS } from '../config/navigation'
import { useState } from "react";
import MenuIcon from "/icons/menu.svg";
import CloseIcon from "/icons/close.svg";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className='fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-2xl border-2 border-neutral-800'>
        <div className='max-w-10xl mx-auto px-6 lg:px-12 h-18 flex items-center justify-between'>
            <a href="" className='flex items-center'>
                <img src="/icons/NayAI.svg" alt="" className='h-12 w-12'/>
                <span className='font-semibold text-3xl tracking-wide'>
                    NayAI
                </span>
            </a>

            <div className="hidden md:flex gap-6 text-sm">
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

            <button
                onClick={() => setOpen(!open)}
                className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-amber-50"
                >
                <img
                    src={open ? CloseIcon : MenuIcon}
                    alt=""
                    className={`w-6 h-6 invert transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"}`}
                />
            </button>
        </div>
        <div
        className={`md:hidden overflow-hidden bg-black/90 transition-all duration-300 ease-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} `}>
            <nav className="flex flex-col px-6 py-6 gap-6">
            {NAV_LINKS.map(link => (
                <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-neutral-300 hover:text-white transition text-base"
                >
                {link.name}
                </a>
            ))}
            </nav>
      </div>
    </div>
  )
}

export default Navbar