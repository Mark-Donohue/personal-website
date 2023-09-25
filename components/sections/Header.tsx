"use client";

import React, { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMenu, IoClose } from "react-icons/io5";

import { NAV_ITEMS } from "@/lib/data";

const Header = () => {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 h-[4rem] w-full rounded-none border border-opacity-40 shadow-lg shadow-black/[0.03]">
        <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
          <ul className="items-center justify-center flex-wrap flex-row sm:flex sm:space-x-6">
            {NAV_ITEMS.map((navItem, index) => {
              return (
                <Link
                  className="uppercase hover:cursor-pointer hover:text-[#008AD8]"
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
