import React from 'react'
import AboutImg from "../assets/prabu.png";

const WorkExperience = () => {
  return (
    <div id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>

        <h2 className="text-2xl md:text-4xl font-bold">Career Overview</h2>
        <h3 className="text-2xl md:text-4xl p-5">Crafting Scalable Web Solutions</h3>

        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About projects" />
          <ul className="w-96 text-2xl">
            <div>
              I'm a full stack developer with expertise in React, PHP, and Laravel. At CloudSky Technologies, I build complete, human-focused applications that are both powerful and easy to use.
            </div>
            <div className="mt-4">
              I specialize in creating scalable architectures, intuitive interfaces, and secure backend systems. From UX to deployment, I ensure every layer performs at its best.
            </div>
          </ul>


        </div>
      </div>
    </div>
  )
}

export default WorkExperience
