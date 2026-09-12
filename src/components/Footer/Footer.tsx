function Footer(){
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1080px] px-5 py-14">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/*Brand section*/}
          <div>
            <img
              src="/images/logo-text.png"
              alt="Dev Stack"
              className="w-[140px]"
            />

            <p className="mt-4 max-w-xs text-[11px] leading-6 text-gray-400">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="mt-5 flex gap-5 text-[11px] font-medium text-gray-600">
              <a href="#" className="hover:text-pink-500">
                GitHub
              </a>

              <a href="#" className="hover:text-pink-500">
                Twitter
              </a>

              <a href="#" className="hover:text-pink-500">
                LinkedIn
              </a>
            </div>
          </div>

          {/*Product section*/}
          <div>
            <h3 className="text-[11px] font-bold uppercase text-[#172033]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[10px] text-gray-500">
              <a href="#home" className="hover:text-pink-500">
                Home
              </a>

              <a href="#technologies" className="hover:text-pink-500">
                Technologies
              </a>

              <a href="#projects" className="hover:text-pink-500">
                Projects
              </a>
            </div>
          </div>

          {/*Company section*/}
          <div>
            <h3 className="text-[11px] font-bold uppercase text-[#172033]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[10px] text-gray-500">
              <a href="#about" className="hover:text-pink-500">
                About
              </a>

              <a href="#contact" className="hover:text-pink-500">
                Contact
              </a>

              <a href="#" className="hover:text-pink-500">
                Careers
              </a>
            </div>
          </div>

          {/*Legal section*/}
          <div>
            <h3 className="text-[11px] font-bold uppercase text-[#172033]">
              Legal
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[10px] text-gray-500">
              <a href="#" className="hover:text-pink-500">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-pink-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/*Copyright section*/}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 text-[10px] text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-500">
              Privacy
            </a>

            <a href="#" className="hover:text-pink-500">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;