import { headerLinks } from "../data";

export default function DesktopNav() {
  return (
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
  );
}
