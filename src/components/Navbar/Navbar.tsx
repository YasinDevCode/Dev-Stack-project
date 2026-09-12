import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar(){
  const [menuOpen, setMenuOpen]=useState(false);

  const closeMenu = ()=>{
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-[72px] max-w-[1080px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5">

        {/* Mobile Menu*/}
        <button
          type="button"
          className="btn btn-ghost btn-circle md:hidden"
          onClick={() => setMenuOpen((current)=>!current)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
        </button>

        {/* Logo*/}
        <a href="#home" onClick={closeMenu}>
          <img
            src="/images/logo-text.png"
            alt="Dev Stack"
            className="w-[125px] sm:w-[140px]"
          />
        </a>

        {/*Navigation section*/}
        <nav
          className={`
            absolute left-0 right-0 top-[72px]
            border-b border-gray-100 bg-white p-5 shadow-md
            md:static md:flex md:items-center md:justify-center
            md:gap-7 md:border-0 md:p-0 md:shadow-none
            ${menuOpen ? "block" : "hidden md:flex"}
          `}
        >
          <a
            href="#home"
            onClick={closeMenu}
            className="block py-2 text-[13px] font-medium text-pink-600 md:py-0"
          >
            Home
          </a>

          <a
            href="#technologies"
            onClick={closeMenu}
            className="block py-2 text-[13px] text-gray-600 hover:text-pink-600 md:py-0"
          >
            Technologies
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="block py-2 text-[13px] text-gray-600 hover:text-pink-600 md:py-0"
          >
            Projects
          </a>

          <a
            href="#about"
            onClick={closeMenu}
            className="block py-2 text-[13px] text-gray-600 hover:text-pink-600 md:py-0"
          >
            About
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="block py-2 text-[13px] text-gray-600 hover:text-pink-600 md:py-0"
          >
            Contact
          </a>
        </nav>

        {/*Authentication section*/}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            type="button"
            className="btn btn-ghost btn-sm text-[11px] font-normal sm:text-[13px]"
          >
            Sign In
          </button>

          <button
            type="button"
            className="btn btn-sm rounded-full border-none px-4 text-[11px] text-white sm:px-5 sm:text-[13px]"
            style={{
              background: "var(--brand-gradient)",
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;