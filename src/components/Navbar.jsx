"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBackground(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${navBackground ? "scrolled" : ""} ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container">
        <Link href="/" prefetch className="logo" onClick={closeMenu}>
          <img src="/assets/Logos/LogoWhite.webp" alt="Logo" />
        </Link>
        <Link href="/" prefetch className="navbar-brand" onClick={closeMenu}>
          PoliHack
        </Link>
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`bar ${isMenuOpen ? "open" : ""}`}></span>
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul>
            {/* <li>
              <Link href="/about" className="text-white" onClick={closeMenu}>
                About us
              </Link>
            </li> */}
            {/* <li>
              <Link href="/current-edition" className="text-white" onClick={closeMenu}>
                Current Edition
              </Link>
            </li> */}
            <li>
              <Link href="/past-editions-2" prefetch className="text-white" onClick={closeMenu}>
                Past Editions
              </Link>
            </li>
            <li>
              <Link href="/feedback" prefetch className="text-white" onClick={closeMenu}>
                Feedback
              </Link>
            </li>
            <li>
              <a href="https://docs.google.com/forms/d/10rcKy6UoWYHVdExtkhyrUYEbvT5QOJBANzy0TxllJOY/edit?usp=drivesdk" target="_blank" rel="noopener noreferrer" className="text-white" onClick={closeMenu}>
                Register
              </a>
            </li>
            
            <li>
              <a 
                className="text-white" 
                href="https://osutcluj.pixieset.com/polihack-2/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Gallery
              </a>
            </li>
            <li>
              {/* <a 
                className="text-white" 
                href="https://docs.google.com/forms/d/e/1FAIpQLSec1QQ1G6tq5BPxaIDPEREGnm1bmi-N1SLe_9lyhhzSYXLHQg/viewform" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Register
              </a> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
