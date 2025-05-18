import { ReactNode } from "react";
import {
  FaDev,
  FaFacebook,
  FaFreeCodeCamp,
  FaLinkedin,
  FaStackOverflow,
  FaTwitch,
} from "react-icons/fa";
import { FaGithub, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";
import { Faq, OptionType, ReviewType } from "./types";

const displayLinks = [
  {
    identifier: "github",
    bgColor: "#1A1A1A",
  },
  {
    identifier: "youtube",
    bgColor: "#EE3939",
  },
  {
    identifier: "twitter",
    bgColor: "#43B7E9",
  },
  {
    identifier: "frontend mentor",
    bgColor: "#fff",
  },
  {
    identifier: "linkedin",
    bgColor: "#2D68FF",
  },
  {
    identifier: "facebook",
    bgColor: "#2442AC",
  },
  {
    identifier: "twitch",
    bgColor: "#EE3FC8",
  },
  {
    identifier: "dev.to",
    bgColor: "#333333",
  },
  {
    identifier: "freecodecamp",
    bgColor: "#302267",
  },
  {
    identifier: "stack overflow",
    bgColor: "#EC7100",
  },
];

const options: OptionType[] = [
  {
    value: "frontendMentor",
    label: "Frontend Mentor",
    imageUrl: <SiFrontendmentor />,
  },
  {
    value: "twitter",
    label: "Twitter",
    imageUrl: <FaSquareXTwitter />,
  },
  {
    value: "github",
    label: "Github",
    imageUrl: <FaGithub />,
  },
  {
    value: "linkedin",
    label: "Linkedin",
    imageUrl: <FaLinkedin />,
  },
  {
    value: "youtube",
    label: "Youtube",
    imageUrl: <FaYoutube />,
  },
  {
    value: "facebook",
    label: "Facebook",
    imageUrl: <FaFacebook />,
  },
  {
    value: "devTo",
    label: "DevTo",
    imageUrl: <FaDev />,
  },
  {
    value: "twitch",
    label: "Twitch",
    imageUrl: <FaTwitch />,
  },
  {
    value: "freecodecamp",
    label: "Freecodecamp",
    imageUrl: <FaFreeCodeCamp />,
  },
  {
    value: "stack overflow",
    label: "Stack overflow",
    imageUrl: <FaStackOverflow />,
  },
];

const reviews: ReviewType[] = [
  {
    author: "Edward Baker",
    text: " Devlinks allows me to organise my links, give it a try and you will enjoy it",
    rating: 3,
  },
  {
    author: "Edward Baker",
    text: " Devlinks allows me to organise my links, give it a try and you will enjoy it",
    rating: 5,
  },
  {
    author: "Edward Baker",
    text: " Devlinks allows me to organise my links, give it a try and you will enjoy it",
    rating: 4,
  },
];
const faqs: Faq[] = [
  {
    qs: "What is Devlinks?",
    ans: "Devlinks is a platform that allows developers to consolidate all their important links — portfolios, GitHub repositories, blogs, and social profiles — into a single, customizable page.",
  },
  {
    qs: "Is Devlinks free to use?",
    ans: "Yes! Devlinks offers a free plan that allows you to create and share your profile. We also offer premium features like analytics and advanced customization for power users.",
  },

  {
    qs: "Do I need to know how to code to use Devlinks?",
    ans: "No coding required! Devlinks is built with developers in mind, but it’s user-friendly and doesn’t require any technical knowledge to set up.",
  },
  {
    qs: "Can I track who clicks my links?",
    ans: "Yes, with our analytics feature (available on Pro plans), you can view detailed insights on link clicks, including total views, top-performing links, and geographic data.",
  },
];

const objectives: string[] = [
  "Devlinks is an innovative organization dedicated to simplifying the way developers share and manage their personal and professional links. Recognizing the growing need for a streamlined method to share portfolios, repositories, blogs, and social profiles, Devlinks provides a platform that consolidates all these",
  "Devlinks is an innovative organization dedicated to simplifying the way developers share and manage their personal and professional links. Recognizing the growing need for a streamlined method to share portfolios, repositories, blogs, and social profiles, Devlinks provides a platform that consolidates all these",
  "Devlinks is an innovative organization dedicated to simplifying the way developers share and manage their personal and professional links. Recognizing the growing need for a streamlined method to share portfolios, repositories, blogs, and social profiles, Devlinks provides a platform that consolidates all these",
];
export { options, displayLinks, reviews, faqs, objectives };
