import { useState } from "react";
import { menu, close, logo } from "../assets";

import { navLinks } from "../constants/data";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex  hidden   justify-end flex-1">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className={`font-poppins font-normal  cursor-pointer text-[16] ${
              link.title === active ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}> {link.title} </a>
          </li>
        ))}
      </ul>

      {/* Small screen */}

      <div className="sm:hidden  flex flex-1  justify-end items-center">
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={toggle ? close : menu}
          className="w-[28px] h-[28px] "
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  `}
        >
          <ul className="list-none flex justify-end flex-1 flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className={`font-poppins font-normal  cursor-pointer text-[16] ${
                  link.title === active ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-10"} `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}> {link.title} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
