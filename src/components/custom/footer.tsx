"use client";

import { useEffect, useState } from "react";

import FacebookLogo from "../../../public/icons/fackbookLogo";
import GithubLogo from "../../../public/icons/githubLogo";
import GlobeLogo from "../../../public/icons/globeLogo";
import MainLogo from "../../../public/icons/mainLogo";
import TwitterLogo from "../../../public/icons/twitterLogo";
import Container from "./container";
import Title from "./title";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const links: any = {
    Community: {
      links: [
        "About Us",
        "Guidelines and how to",
        "Quote from the best",
        "How to start a blog",
      ],
      title: "Community",
    },
    "Getting Started": {
      title: "Getting Started",
      links: [
        "About Us",
        "Guidelines and how to",
        "Quote from the best",
        "How to start a blog",
        "Quote from the best",
        "Guidelines and how to",
      ],
    },
    "lower-footer": [
      `${currentYear} The Good Company. All Rights Reserved`,
      ["Terms of service", "Privacy Policy", "Security", "Sitemap"],
      [<TwitterLogo />, <FacebookLogo />, <GlobeLogo />, <GithubLogo />],
    ],
  };

  return (
    <Container className="bg-black">
      <footer className=" bg-black  text-primary-links flex flex-col justify-center lg:py-10">
        <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
          <div className="flex-1/2">
            <MainLogo />
          </div>
          <div className="flex-1/2">
            <Title text={links.Community.title} />
            <div className="my-3 flex flex-col gap-6 list-none cursor-pointer">
              {links["Community"].links.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </div>
          </div>
          <div className="flex-1/2">
            <Title text={links["Getting Started"].title} />
            <div className="my-3 flex flex-col gap-6 list-none cursor-pointer">
              {links["Getting Started"].links.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col my-5 gap-5 items-center lg:flex-row">
          <div className="flex-1/2">{links["lower-footer"][0]}</div>
          <div className="flex-1/2 flex flex-col items-center gap-6 sm:flex-row ">
            {links["lower-footer"][1].map((item: string, i: number) => (
              <span className="block cursor-pointer" key={i}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex-1/2  flex items-center justify-center gap-6 ">
            {links["lower-footer"][2].map((item: any, i: any) => (
              <span className="cursor-pointer" key={i}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

// width: 1441;
// height: 446;
// gap: 64px;
// padding-top: 48px;
// padding-right: 80px;
// padding-bottom: 48px;
// padding-left: 80px;

// font-family: Inter;
// font-weight: 600;
// font-size: 20px;
// line-height: 20px;
// letter-spacing: 0px;
// text-align: center;

// width: 452.5;
// height: 136;
// gap: 24px;
