import React from "react";
import avatarImg from "../assets/prabu.png";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="flex-grow md:pt-10">
        <h3 className="text-xl md:text-5xl font-bold flex leading-normal">
          Hi, I am ANANDPRABU
        </h3>
        <h1 className="text-xl md:text-2xl font-semibold leading-normal">
          React & PHP Full Stack Developer
        </h1>
        <br />
        <p className="text-sm md:text-2xl p-3 mt-0">
          I am a passionate full stack developer specializing in React for frontend and PHP (Laravel) for backend. Currently building scalable, human-centered web applications at CloudSky Technologies.
        </p>
        <p className="text-sm md:text-2xl p-3 mt-0">
          With solid experience in both client-side interactivity and server-side logic, I take pride in crafting seamless, responsive, and robust digital solutions end-to-end.
        </p>

        <a href="#Footer">
          <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-[#465697]">
            Contact Me
          </button></a>
      </div>
      <div className="hidden md:block">
        <img className="max-w-full" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;