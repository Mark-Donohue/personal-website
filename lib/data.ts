import React from "react";

export const EXPERIENCE = [
  {
    name: "Mediaocean",
    description:
      "Delivered high-quality production code across numerous APIs to meet evolving requirements of clients and stakeholders. Leveraged Flask and Python to implement key workflows between an internal API and Google Discover, enabling targeted ad serving on the social media platform and enhancing Mediaocean's product offering.",
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
] as const;

export const NAV_ITEMS = [
  {
    label: "Home",
    section: "home",
    hash: "#home",
  },
  {
    label: "About",
    section: "about",
    hash: "#about",
  },
  {
    label: "Skills",
    section: "skills",
    hash: "#skills",
  },
  {
    label: "Experience",
    section: "experience",
    hash: "#experience",
  },
] as const;

export const SKILLS = [
  { name: "Kotlin" },
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "Python" },
  { name: "Flask" },
  { name: "Docker" },
  { name: "TypeScript" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
] as const;
