import {
  algorithms,
  devnotes,
  oscs,
} from "../assets";

export const navLinks = [
  { id: "hero", title: "Hero" },
  { id: "portfolio", title: "Portfolio" },
  { id: "experience", title: "Experience" },
  { id: "contact", title: "Contact" },
];

const experiences = [
  {
    title: "Freelancing — Software Developer",
    company_name: "Freelancing",
    date: "2020 - PRESENT",
    details: [
      "Develop innovative software solutions that help businesses streamline their operations.",
      "Build applications that improve efficiency, scalability, and user experience.",
      "Assist companies in adopting modern technologies to stay competitive in the market."
    ],
  },
];

const portfolio = [
  {
    name: "AI Trading Bot",
    description:
      "A real-time trading bot designed to optimize trading strategies and improve decision-making.",
    image: oscs, // Update asset reference if needed
  },
  {
    name: "Social Media Platform",
    description:
      "A scalable, full-featured social media platform built with the MERN stack featuring real-time chat and secure authentication.",
    image: devnotes, // Update asset reference if needed
  },
  {
    name: "Portfolio Manager",
    description:
      "An investment portfolio manager that simplifies asset tracking and analytics using modern web technologies.",
    image: algorithms, // Update asset reference if needed
  },
];

export { experiences, portfolio };
