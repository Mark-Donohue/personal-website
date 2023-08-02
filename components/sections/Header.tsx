"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMenu, IoClose } from "react-icons/io5";

interface NavItem {
  label: string;
  section: string;
}

// Menu Options
const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    section: "home",
  },
  {
    label: "About",
    section: "about",
  },
  {
    label: "Experience",
    section: "experience",
  },
  {
    label: "Résumé",
    section: "Résumé"
  }
];

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-8 bg-[#F8F8F7] shadow fixed top-0 z-50">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-2 md:block">
            <div className="md:py-5 md:block">
              <h2 className="text-2xl font-bold">Mark Donohue</h2>
            </div>
            <div className="md:hidden pt-3">
              <button onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
                {isSideMenuOpen ? <IoClose size={36} /> : <IoMenu size={36} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-0 ${
              isSideMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((navItem, index) => {
                return (
                  <Link
                    className="block lg:inline-block uppercase hover:cursor-pointer hover:text-[#167BFF]"
                    key={index}
                    to={navItem.section}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
                  >
                    {navItem.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
