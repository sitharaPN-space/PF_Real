import React, { useState } from "react";
import { close, logo, menu } from "../assets";

const ItemList = ({ ItemName, url }) => {
  return (
    <li
      key={1}
      className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
    >
      <a href={url}>{ItemName}</a>
    </li>
  );
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="portfolio" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-10">
        <ItemList ItemName="About" url="#about" />
        <ItemList ItemName="Skills" url="#skills" />
        <ItemList ItemName="Experience" url="#experience" />
        <ItemList ItemName="Projects" url="#projects" />
        <ItemList ItemName="Education" url="education" />
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      <div
        className={`${toggle ? "flex" : "hidden"} 
          top-20 pt-12 pb-24
          rounded-b-lg bg-black-gradient-vert absolute right-0 w-[100%]`}
      >
        <ul className="flex flex-col gap-y-6 justify-center items-center list-none w-[100%]">
          <ItemList ItemName="About" url="#about" />
          <ItemList ItemName="Skills" url="#skills" />
          <ItemList ItemName="Experience" url="#experience" />
          <ItemList ItemName="Projects" url="#projects" />
          <ItemList ItemName="Education" url="education" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
