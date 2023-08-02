"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="w-full h-1 mx-auto mt-8 bg-gray-300 border-0 rounded-xl mb-2"></hr>
      <div className="mx-auto flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="text-neutral-500 pb-2">© 2023 Mark Donohue</div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-6">
          <a
            href="https://github.com/Mark-Donohue"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub
              className="hover:scale-110 ease-in duration-75 cursor-pointer text-neutral-500"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/donohuem/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin
              className="hover:scale-110 ease-in duration-75 cursor-pointer text-neutral-500"
              size={24}
            />
          </a>
          <a
            href="https://wellfound.com/u/mark-donohue-11"
            rel="noreferrer"
            target="_blank"
          >
            <FaAngellist
              className="hover:scale-110 ease-in duration-75 cursor-pointer text-neutral-500"
              size={24}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
