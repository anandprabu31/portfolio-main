import React from "react";
import { FaCss3, FaGithub, FaHtml5, FaJs, FaReact, FaBootstrap  } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { SiRedux  } from "react-icons/si";
import { SiAxios } from "react-icons/si";


const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold inline-block mr-4">Skills</h1>
      
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-10 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGithub color="#FFFFFF" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaBootstrap  color="#563d7c" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <RiTailwindCssFill  color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedux   color="#563d7c" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiVite   color="#e833ff" size={50} />
          </span>
          <h2  className="text-2xl md:text-4xl text-white font-bold inline-block"> This page is build using Tailwind CSS</h2>
        </div>
        <div>
          <div>
          <h1 className="text-2xl md:text-4xl text-white font-bold inline-block">Projects</h1>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-opacity-60 cursor-pointer">
      <SiRedux color="#563d7c" size={50} />
      <span className="text-white">
        <h2 className="leading-tight">Ecommerce website - Big Deal</h2>
        <p className="text-sm leading-tight font-thin">React Bootstrap</p>
        <ul className="text-sm p-2"> </ul>
     <button className="mt-5 md:md-10 text-white py-1 px-2 text-sm md:text-lg md:py-1 md:px-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697]"> <a href="https://ecommerce-three-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
          Visit Project
        </a>
        </button>
      </span>
    </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-opacity-60 cursor-pointer">
            <SiAxios color="#6699CC" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">Weather Tracker App </h2>
              <p className="text-sm leading-tight font-thin">
                React Bootstrap
              </p>
              <ul className="text-sm p-2"></ul>
              <button className="mt-5 md:md-10 text-white py-1 px-2 text-sm md:text-lg md:py-1 md:px-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697]">
              <a href="https://my-weather-app-flax-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
          Visit Project
        </a></button>
            </span>
          </div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center hover:bg-opacity-60 cursor-pointer">
          <FaReact color="#61DAFB" size={50} />
            <span className="text-white">
              <h2 className="leading-tight">To-Do list App </h2>
              <p className="text-sm leading-tight font-thin">
                React Bootstrap
              </p>
              <ul className="text-sm p-2"></ul>
              <button className="mt-5 md:md-10 text-white py-1 px-2 text-sm md:text-lg md:py-1 md:px-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697]">  <a href="https://to-do-list-delta-ochre-79.vercel.app/" target="_blank" rel="noopener noreferrer">
          Visit Project
        </a></button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
