import { FC } from "react";
import NavItem from "../types/NavItem";

const Navbar: FC = () => {
  const navItems: NavItem[] = [
    { name: "Equipement", url: "/" },
    { name: "About us", url: "/about" },
    { name: "Blog", url: "/blog" },
  ];

  return (
    <nav className="flex justify-between text-white px-16 py-5">
      <div className="text-white font-bold">MNTN</div>
      <ul className="flex gap-10">
        {navItems.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="flex">
        <a href="#">Account</a>
      </div>
    </nav>
  );
};

export default Navbar;
