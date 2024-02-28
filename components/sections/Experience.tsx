"use client";

import React from "react";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

import Slide from "../effects/Slide";

const EXPERIENCES = [
  {
    name: "Mediaocean",
    description:
      "Delivered high-quality production code across numerous APIs to meet evolving requirements of clients and stakeholders. Leveraged Apollo GraphQL and Python to implement key workflows between an internal API and Google Discover, enabling targeted ad serving on the social media platform and enhancing Mediaocean's product offering.",
    link: "https://www.mediaocean.com/",
    dates: "Apr 2021 - Present",
  },
  {
    name: "Deutsche Bank",
    description:
      "Developed a production REST API for sending HTML emails using Spring Boot and Kotlin, greatly expediting the financial research invoicing process. Implemented intuitive UI components with Vue.js and Element, contributing to an enhanced user experience.",
    link: "https://www.db.com/index?language_id=1",
    dates: "Jul 2019 - Apr 2021",
  },
  {
    name: "AGCO",
    description:
      "Led conversations with product owners and end users to discuss business requirements, often exclusively in German, resulting in timely and accurate delivery of software changes. Created interactive business intelligence reports with Tableau that were delivered to key stakeholders.",
    link: "https://www.agcocorp.com/",
    dates: "May 2018 - Aug 2018",
  },
  {
    name: "Tapestry",
    description:
      "Shadowed network engineers and specialists to learn firewall technologies and threat management. Helped integrate a corporate acquisition with Tapestry's hybrid cloud network using SCP scripts.",
    link: "https://www.tapestry.com/",
    dates: "Jun 2017 - Aug 2017",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h1 className="font-bold text-center text-4xl mb-6 md:pt-2 pt-12">
        Experience
        <hr className="w-10 h-1 mx-auto my-4 border-0 rounded-xl md:mb-2"></hr>
      </h1>
      <div className="flex flex-col space-y-8 pb-4">
        {EXPERIENCES.map((item, index) => {
          return (
            <div key={index} className="flex flex-col">
              <Slide offset="-300px 0px -300px 0px">
                <div className="shadow-lg rounded-xl md:mt-6 mt:2 box-border animate-cubicBezierSlide animation-delay-3">
                  <h1 className="text-2xl font-semibold mb-2 pl-4 pt-4">
                    {item.name}
                  </h1>
                  <p className="pl-4 pb-3 text-sm font-thin uppercase text-gray-600 align-middle">
                    {item.dates}
                  </p>
                  <p className="leading-7 mb-3 px-4 text-gray-600">
                    {item.description}
                  </p>
                  <div className="pl-4 pb-4">
                    <Link href={item.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:cursor-pointer hover:scale-125 ease-in duration-75 text-[#167BFF]"
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
