"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-20 md:flex-row md:space-x-2 md:text-left md:py-52">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full"
            src="/headshot.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-4/5 md:mt-6">
          <h1 className="font-bold text-4xl mt-2 md:text-5xl md:mt-6">
            Hi, I&apos;m Mark
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-1xl">
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
      </div>
    </section>
  );
};

export default Hero;
