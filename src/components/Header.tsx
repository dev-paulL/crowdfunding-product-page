import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import closeMenuIcon from "../assets/icon-close-menu.svg";
import DesktopNav from "./DesktopNav";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible((visible) => !visible);
  };
  return (
    <header className="bg-transparent absolute w-full p-8">
      <div className="relative w-full items-center max-w-headerWidth mx-auto flex justify-between">
        <img src={logo} alt="Crowdfund" />

        <DesktopNav />

        {/* Mobile Hamburger */}
        <button
          aria-label={`${!isMenuVisible ? "Open" : "Close"} Navigation Menu`}
          aria-expanded={isMenuVisible}
          className="block lg:hidden"
          onClick={toggleMenu}
          aria-describedby="mobileMenu"
        >
          {!isMenuVisible ? (
            <img src={hamburger} alt="" />
          ) : (
            <img src={closeMenuIcon} alt="" />
          )}
        </button>

        <div
          id="mobileMenu"
          aria-live="assertive"
          className={`w-full h-full absolute top-12  ${
            isMenuVisible ? "z-20" : "-z-10"
          }`}
        >
          <AnimatePresence>{isMenuVisible && <MobileMenu />}</AnimatePresence>
        </div>
      </div>
    </header>
  );
}
