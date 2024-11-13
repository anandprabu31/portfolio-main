import React from 'react'
import AboutImg from "../assets/prabu.png";

const WorkExperience = () => {
  return (
    <div id="About"
    className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
  >
    <div>
    
    <h2 className="text-2xl md:text-4xl font-bold">Careers Overview</h2>
    
    <h3 className="text-2xl md:text-4xl p-5"> I build things for the web</h3>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About projects" />
        <ul className="w-96" >
        <div className='text-2xl' >
            <span >I'm</span> a software developer specializing in building exceptional digital experiences.
            currently Iam focus on building accessible , human-centered products at CloudSky Technologies.  
        </div>
        <div className='text-2xl'>
            I like to craft a solid and scalable front end products with a great user    experience
        </div>
        </ul>

    
    </div>
    </div>
    </div>
  )
}

export default WorkExperience
