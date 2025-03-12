"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

import MainLogo from "../../../public/icons/mainLogo";
import Container from "./container";
import { Button } from "../ui/button";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/aboutus",
  },
  {
    title: "Teachnical cources",
    link: "/cources",
  },
  {
    title: "Itech soulutions",
    link: "/itech-solutions",
  },
  {
    title: "IT CERTIFIED MILITARY LIST",
    link: "/certificate",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
];

const Navbar = () => {
  const path = usePathname();

  console.log(path);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container
      className={`${
        isScrolled
          ? "bg-white/20 backdrop-blur-lg border-white/30 shadow-lg"
          : "bg-black"
      } transition-colors  sticky top-0 z-[1000]`}
    >
      <nav className=" w-full h-[70px] flex  lg:justify-center lg:items-center ">
        <div className="w-full flex justify-between lg:justify-center  items-center">
          <div>
            <MainLogo />
          </div>
          <div className="hidden lg:flex w-full justify-evenly items-center">
            {links.map((item, i) => (
              <Link
                className={`text-sm  uppercase  font-semibold ${
                  path == item.link ? "text-primary-links" : "text-white"
                }`}
                key={i}
                href={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="lg:hidden p-0.5">
            <Button
              onClick={() => console.log("I am button.")}
              variant="secondary"
              size="icon"
            >
              <Menu className="text-white" />
            </Button>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
