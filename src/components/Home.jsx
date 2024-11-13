import React from "react";
import avatarImg from "../assets/prabu.png";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="flex-grow md:pt-10">
        <h3 className="text-xl md:text-5xl font-bold flex leading-normal">
          Hi, I am ANANDPRABU K
        </h3>
        <h1 className="text-xl md:text-2xl font-semibold leading-normal">
          Front-End Developer
        </h1>
        <br />
        <p className="text-sm md:text-2xl p-3 mt-0">
          I am a highly motivated and enthusiastic React developer with strong
          foundation of JavaScript and modern web principles. Passion for Creating
          innovative and user-friendly web applications.
        </p>
        <p className="text-sm md:text-2xl p-3 mt-0">
          I am confident about my skills and experience, making me a valuable asset
          to any team. I am eagerly waiting to attend the interview to start my fresh
          career as a Frontend developer.
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