import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiWhatsappLogo } from "react-icons/pi";


const Footer = () => {

  const handleDownload = () => {
    // Replace 'assets/Anand resume.pdf' with the actual path to your PDF file
    const resumeUrl = 'Anand resume.pdf'; // Assuming the PDF is in the 'assets' folder
  
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Anandprabu resume.pdf';
  
    // Trigger the download (Modern and Cross-Browser Approach)
    a.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: false,
      view: window
    }));
  };
  
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>
      <div>
  <div>
  <button className="mt-5 md:mt-10 text-white py-1 px-2 text-sm md:text-lg md:py-1 md:px-2 hover:opacity-85 duration-300 hover:scale-105 font-semibold bg-slate-950 sm:text-sm sm:py-sm sm:px-sm" onClick={handleDownload}>
    Download Resume
  </button>
</div>
</div>
      <ul className="text-sm md:text-xl">
      <li className="flex gap-1 items-center">
  <MdOutlineEmail size={20}  />
  <a href="mailto:anandprabu060@gmail.com?Subject=Hello" target="_top">anandprabu060@gmail.com</a>
</li>
<li className="flex gap-1 items-center">
  <CiLinkedin size={20} />
  <span > <a href="https://www.linkedin.com/in/anandprabu31" target="_blank" rel="noopener noreferrer">anandprabu31</a></span>
</li>
        <li className="flex gap-1 items-center">
  <FaGithub size={20} />
  <a href="https://github.com/anandprabu31" target="_blank" rel="noopener noreferrer">anandprabu31</a>
</li>
<li className="flex gap-1 items-center">
  <PiWhatsappLogo  size={20} />
    <span>8344491636</span>
</li>
      </ul>
    </div>
  );
}
export default Footer;
