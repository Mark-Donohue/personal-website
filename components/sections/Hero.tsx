"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { IoArrowDown } from "react-icons/io5";
import { FaAngellist, FaGithub, FaLinkedin } from "react-icons/fa6";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate:fadeIn animation-delay-2 md:flex-row md:space-x-2 md:text-left my-10 py-16 md:pt-44 md:py-28">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full"
            src="/Headshot.jpg"
            alt=""
            quality={100}
            width={315}
            height={315}
          />
        </div>
        <div className="md:w-4/5 md:mt-2">
          <h1 className="font-bold text-4xl mt-9 md:text-5xl md:mt-6">
            Hi, I&apos;m Mark
          </h1>
          <p className="text-lg mt-2 mb-6">
            I&apos;m a software engineer based in New York City. Currently,
            I&apos;m focused on designing and building efficient and secure APIs
            at{" "}
            <a
              href="https://www.mediaocean.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#167BFF]"
            >
              Mediaocean
            </a>
            . Please feel free to reach out!
          </p>
          <div className="mx-auto flex flex-col md:flex-row items-center md:justify-start justify-center flex-wrap md:space-x-6">
            <div className="flex flex-row md:pb-0 pb-3">
              <Link
                to=""
                className="rounded-lg text-neutral-100 uppercase font-semibold px-6 py-3 shadow bg-[#167BFF] hover:bg-[#136EE5] hover:cursor-pointer"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                GET IN TOUCH
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2">
              <a
                href="https://github.com/Mark-Donohue"
                rel="noreferrer"
                target="_blank"
              >
                <FaGithub
                  className="hover:scale-125 ease-in duration-75 cursor-pointer text-[#167BFF]"
                  size={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/donohuem/"
                rel="noreferrer"
                target="_blank"
              >
                <FaLinkedin
                  className="hover:scale-125 ease-in duration-75 cursor-pointer text-[#167BFF]"
                  size={40}
                />
              </a>
              <a
                href="https://wellfound.com/u/mark-donohue-11"
                rel="noreferrer"
                target="_blank"
              >
                <FaAngellist
                  className="hover:scale-125 ease-in duration-75 cursor-pointer text-[#167BFF]"
                  size={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center pb-20">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <IoArrowDown
            size={40}
            className="hover:cursor-pointer animate-bounce"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
