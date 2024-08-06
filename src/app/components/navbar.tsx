"use client";

import { useState } from "react";
import Image from "next/image";
import Image01 from "../image/logo.png";
import Link from "next/link";
import "./navbar.css";
import { BiMenu, BiX } from "react-icons/bi";
import { Open_Sans, Raleway } from "@next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setNavOpen(!navOpen);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="navbar top-fixed">
      <div className="container main-001">
        <div className="logo-container">
          <Image src={Image01} alt="logo" width={65} className="logo-img" />
          <h1 className={`logo ${raleway.className}`}>AKESHYA</h1>
        </div>
        <div className="menu-button-container">
          <button onClick={toggleNav} type="button" className="menu-button">
            <i className="menu-icon">
              <BiMenu />
            </i>
          </button>
        </div>

        <div className={`nav-links-container ${navOpen ? "open" : "closed"}`}>
          <div className="close-btn">
            <button onClick={toggleNav} type="button" className="menu-button">
              <i className="close-icon">
                <BiX />
              </i>
            </button>
          </div>
          <ul className="nav-links">
            <li>
              <Link
                href="/"
                className={`nav-link text-primary-dark ${openSans.className}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className={`nav-link ${openSans.className}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li className="lg:w-auto md:w-full">
              <Link
                href="#service"
                className={`nav-link ${openSans.className}`}
                onClick={closeMenu}
              >
                Service
              </Link>
            </li>
            <li className="w-full">
              <Link href="#contact" onClick={closeMenu}>
                <button
                  type="button"
                  className={`contact-button ${openSans.className}`}
                >
                  Contact Us
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
