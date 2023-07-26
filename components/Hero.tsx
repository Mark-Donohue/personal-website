"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16">
        <div>
          <Image
            className="rounded-full"
            src="/headshot.jpg"
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <h1 className="font-bold text-4xl mt-6">
            Hi, I&apos;m <span className="text-[#167BFF]">Mark</span>
          </h1>
          <p className="text-lg mt-4 mb-6">
            I&apos;m a Software Engineer based in New York City. Currently,
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
