import React from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
export default function Header() {
  const headerLinks = ["About", "Discover", "Get Started"];
  return (
    <header className="bg-transparent absolute w-full p-6">
        <div className="w-full max-w-headerWidth mx-auto flex justify-between">
      <img src={logo} alt="Crowdfund" />

      {/* Desktop Nav */}
      <nav className="hidden lg:flex">
        <ul>
          {headerLinks.map((hl) => {
            return (
              <li key={hl}>
                <a href="#">{hl}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Mobile Hamburger */}
      <button aria-label="Open Mobile Menu" aria-expanded="false">
            <img src={hamburger} alt="" />
        </button>
      </div>
    </header>
  );
}
