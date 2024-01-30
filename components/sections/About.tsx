"use client";

import React from "react";

const TECHNOLOGIES = [
  { name: "Kotlin" },
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "Python" },
  { name: "Flask" },
  { name: "Docker" },
  { name: "TypeScript" },
  { name: "Node.js" },
  { name: "Express" },
];

const About = () => {
  return (
    <section id="about">
      <div className="my-1 md:my-12 pb-20 md:pt-20 md:pb-48">
        <h1 className="font-bold text-center text-4xl mb-6">
          About Me
          <hr className="w-10 h-1 mx-auto my-4 border-0 rounded-xl bg-[#167BFF] mb-2"></hr>
        </h1>
        <div className="flex flex-col space-y-6 items-stretch justify-center align-top text-center text-gray-600">
          <div>
            <p>
              Hello! I&apos;m a software engineer with over four years of
              meaningful professional experience.
            </p>
            <br />
            <p>
              I started learning programming at Washington and Lee University,
              where I graduated in 2019 with degrees in Computer Science and
              German. Since then, I&apos;ve had the privilege of working in
              various companies and industries in both the United States and
              Germany, which has given me a well-rounded perspective on software
              development and its impact across different domains.
            </p>
            <br />
            <p>
              The majority of my experience has been tailored towards back-end
              web development, where I&apos;ve produced high-quality, robust
              code to meet an assortment of objectives and product requirements.
              However, I&apos;m always willing to learn new technologies and
              tackle challenging problems. Here&apos;s some technology that
              I&apos;ve worked with recently:
            </p>
          </div>
          <div>
            <div className="flex justify-between flex-wrap flex-row">
              {TECHNOLOGIES.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="bg-gray-300 text-neutral-900 px-4 py-2 mt-2 mx-1 rounded-xl font-semibold hover:scale-110 ease-in duration-75"
                  >
                    {item.name}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
