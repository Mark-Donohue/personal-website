"use client";

import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";

const Hero = () => {
  return (
    <section id="home">
      <div>
        <div>
          <h1>
            Hi, I&apos;m <span className="text-[#167BFF]">Mark</span>
          </h1>
          <p>
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
            to="resume"
            className="text-neutral-100 uppercase font-semibold px-6 py-3 bg-[#167BFF]"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            GET IN TOUCH
          </Link>
        </div>
        <div>
          <Image src="/headshot.jpg" alt="" width={300} height={300} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
