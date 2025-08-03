import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const handleResumeClick = () => {
    toast.info("🚧 Resume is currently being updated. It will be available here soon!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-start md:items-center"
    >
      <div className="mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel free to reach out!
        </h3>
      </div>

      <div className="mb-6 md:mb-0">
        <button
          onClick={handleResumeClick}
          className="text-white py-2 px-4 text-sm md:text-lg font-semibold bg-slate-950 rounded-lg hover:scale-105 duration-300"
        >
          📄 Resume Coming Soon
        </button>
        <p className="text-sm text-gray-200 mt-2 italic">
          Currently updating to reflect my latest work at CloudSky Technologies.
        </p>
        <ToastContainer />
      </div>

      <ul className="text-sm md:text-xl space-y-2">
        <li className="flex gap-2 items-center">
          <MdOutlineEmail size={20} />
          <a
            href="mailto:anandprabu060@gmail.com?Subject=Hello"
            target="_top"
            className="hover:underline"
          >
            anandprabu060@gmail.com
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <CiLinkedin size={20} />
          <a
            href="https://www.linkedin.com/in/anandprabu31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            anandprabu31
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          <a
            href="https://github.com/anandprabu31"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            anandprabu31
          </a>
        </li>
        <li className="flex gap-2 items-center">
          <PiWhatsappLogo size={20} />
          <span>8344491636</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
