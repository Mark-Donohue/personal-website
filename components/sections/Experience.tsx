"use client";

import React from "react";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

import Slide from "../effects/Slide";

const EXPERIENCES = [
  {
    name: "Mediaocean",
    description:
      "Delivered high-quality production code across numerous APIs to meet evolving requirements of clients and stakeholders. Contributed extensively to connecting Mediaocean's ad serving technology with social media publishers.",
    link: "https://www.mediaocean.com/",
  },
  {
    name: "Deutsche Bank",
    description:
      "Developed a production REST API for sending HTML emails using Spring Boot and Kotlin, greatly expediting the financial research invoicing process. Implemented and improved UI components using Vue.js and Element",
    link: "https://db.com",
  },
  {
    name: "AGCO",
    description:
      "Led conversations with product owners and end users to discuss business requirements, often exclusively in German, resulting in timely and accurate delivery of software changes.",
    link: "https://www.agcocorp.com/",
  },
  {
    name: "Tapestry",
    description:
      "Shadowed network engineers and specialists. Helped integrate a corporate acquisition with Tapestry's hybrid cloud network using SCP scripts.",
    link: "https://www.tapestry.com/",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="font-bold text-center text-4xl mb-6 md:pt-2 pt-12">
        Experience
        <hr className="w-10 h-1 mx-auto my-4 border-0 rounded-xl bg-[#167BFF] md:mb-2"></hr>
      </h1>
      <div className="flex flex-col space-y-12 pb-4">
        {EXPERIENCES.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <Slide offset="-300px 0px -300px 0px">
                <div className="shadow-lg rounded-xl md:mt-6 mt:2 box-border animate-cubicBezierSlide animation-delay-2">
                  <h1 className="text-2xl font-semibold mb-4 pl-4 pt-4">
                    {item.name}
                  </h1>
                  <p className="leading-7 mb-4 px-4 text-gray-800">
                    {item.description}
                  </p>
                  <div className="pl-4 pb-4">
                    <Link href={item.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={20}
                        className="hover:cursor-pointer hover:scale-110 ease-in duration-75"
                      />
                    </Link>
                  </div>
                </div>
              </Slide>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
