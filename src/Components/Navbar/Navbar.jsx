import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = scrollPos > 50 ? "nav bg-black" : "nav";

  const handleLinkClick = () => {
    setIsChecked(false);
  };

  return (
    <>
      <nav className="block !text-black">
        <div className="sticky z-40 navbar">
          <div className="container nav-container fixed">
            <input
              className="checkbox"
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="checkbox" className="hamburger-lines z-50 relative">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </label>
            <div className="logo"></div>
            <div className="menu-items text-black">
              <li>
                <a
                  className="text-black tracking-wide"
                  href="#"
                  onClick={handleLinkClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-black tracking-wide"
                  href="#projects"
                  onClick={handleLinkClick}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-black tracking-wide"
                  href="#"
                  onClick={handleLinkClick}
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="text-black tracking-wide"
                  href="/resume"
                  onClick={handleLinkClick}
                >
                  Resume
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
