import { headerLinks } from "../data";
import { motion } from "framer-motion";
export default function MobileMenu() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -200}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="shadow-2xl bg-white w-full rounded-lg px-6"
    >
      <ul>
        {headerLinks.map((hl) => {
          return (
            <li
              key={hl}
              className="py-6 border-b border-darkGray border-opacity-30 font-medium"
            >
              <a href="#">{hl}</a>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
