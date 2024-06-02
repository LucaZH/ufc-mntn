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
      <ul className="hidden md:flex gap-10">
        {navItems.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden md:flex gap-2 justify-center content-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
            fill="white"
          />
          <mask
            id="mask0_1_50"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_50)"></g>
        </svg>
        <a href="#">Account</a>
      </div>
      <button
        type="button"
        className="-my-1 -mr-1 ml-6 flex h-8 w-8 justify-end lg:hidden md:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-white">
          <path
            d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
          ></path>
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
