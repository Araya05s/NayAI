const Footer = () => {
    return (
      <footer id="footer" className="bg-neutral-900 text-neutral-300 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">
  
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              NayAI | AI Image reveal
            </h3>
            <p className="text-sm text-neutral-400">
              Instant AI image reveal with modern web tech.
            </p>
          </div>
  
          <div>
            <p className="text-sm mb-1 font-mono">Contact</p>
            <div className="flex flex-row">
              <p className="text-sm text-neutral-400 px-1">
                  <a href="https://github.com/Araya05s" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                      <img src="/icons/github.svg" alt="Github" className="w-6 h-6"/>
                  </a>
              </p>
              <p className="text-sm text-neutral-400 px-1">
                  <a href="mailto:akhsanaraya5@gmail.com" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                      <img src="/icons/gmail.svg" alt="Gmail" className="w-6 h-6"/>
                  </a>
              </p>
              <p className="text-sm text-neutral-400 px-1">
                  <a href="https://www.linkedin.com/in/muhammadakhsanarayachoirunnas/" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                      <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
                  </a>
              </p>
              <p className="text-sm text-neutral-400 px-1">
                  <a href="https://www.tiktok.com/@akhsan_ar" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                      <img src="/icons/tiktok.svg" alt="Tiktok" className="w-6 h-6"/>
                  </a>
              </p>
              <p className="text-sm text-neutral-400 px-1">
                  <a href="https://www.instagram.com/makhsanaraya" target="_blank" rel="noopener noreferrer" className="p-1 rounded-md bg-neutral-300 hover:bg-neutral-50 inline-flex items-center">
                      <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6"/>
                  </a>
              </p>
            </div>
          </div>
  
        </div>
  
        <div className="text-center text-xs text-neutral-500 mt-8">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer