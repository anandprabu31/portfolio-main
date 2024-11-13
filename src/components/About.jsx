import React from "react";
import AboutImg from "../assets/prabu.png";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About projects</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About projects" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" /> 

              <span className="w-96">
              <Link to="https://ecommerce-three-taupe.vercel.app/">
        <h1 className="text-xl md:text-2xl font-semibold leading-normal cursor-pointer">
        Ecommerce website
                  </h1>
      </Link>
                <p className="text-sm md:text-md leading-tight">
                This project appears to be a basic e-commerce application built with React, Redux, and React Bootstrap.
                </p>
                <p className="text-sm md:text-md leading-tight">
                It implements the following functionalities Product Listing,Add to Cart,Navigation Bar,Cart View,Redux Store
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              <Link to="https://my-weather-app-flax-rho.vercel.app/">
        <h1 className="text-xl md:text-2xl font-semibold leading-normal cursor-pointer">
          Weather Tracker App
        </h1>
      </Link>
                <p className="text-sm md:text-md leading-tight">
                This project is a Weather Application built using React that fetches weather data from the OpenWeatherMap API.
                </p>
                <p className="text-sm md:text-md leading-tight">
                The UI dynamically changes based on the weather condition to provide a more immersive experience.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
              <Link to="https://to-do-list-delta-ochre-79.vercel.app/">
        <h1 className="text-xl md:text-2xl font-semibold leading-normal cursor-pointer">
          To-Do list App
        </h1>
      </Link>
                <p className="text-sm md:text-md leading-tight">
                This project is a To-Do list Application built using React.By Using this Users can add, complete, edit, and delete tasks.
                </p>
                <p className="text-sm md:text-md leading-tight">
                Utilizes React's useState hook to manage the state of the to-do list, including tasks, completion statuses, and editing states.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
