"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMenu, IoClose } from "react-icons/io5";

import { NAV_ITEMS } from "@/lib/data";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 h-[4.5rem] w-full rounded-none shadow-lg bg-[#F8F8F7]">
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 m:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="flex flex-wrap justify-center items-center sm:gap-x-8 gap-x-4 gap-y-1 sm:w-[initial] sm:flex-nowrap sm:gap-5 py-2 sm:py-5">
            {NAV_ITEMS.map((navItem, index) => {
              return (
                <Link
                  className="flex items-center uppercase hover:cursor-pointer hover:text-[#008AD8]"
                  key={index}
                  to={navItem.section}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  onClick={() => {}}
                >
                  {navItem.label}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
