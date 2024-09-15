import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";

export default function Header() {
  const headerLinks = ["About", "Discover", "Get Started"];
  return (
    <header className="bg-transparent absolute w-full p-8">
        <div className="w-full items-center max-w-headerWidth mx-auto flex justify-between">
      <img src={logo} alt="Crowdfund" />

      {/* Desktop Nav */}
      <nav className="hidden lg:block">
        <ul className="flex text-white gap-12 font-medium">
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
      <button aria-label="Open Mobile Menu" aria-expanded="false" className="block lg:hidden">
            <img src={hamburger} alt="" />
        </button>
      </div>
    </header>
  );
}
