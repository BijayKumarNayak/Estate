import React, { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardToShow();
    window.addEventListener("resize", updateCardToShow);
    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container w-full px-6 py-4 pt-20 mx-auto my-20 overflow-hidden md:px-20 lg:px-32"
    >
      <p className="mb-2 text-2xl font-bold text-center sm:text-4xl">
        Project{" "}
        <span className="font-light underline underline-offset-4 decoration-1 under">
          Completed
        </span>
      </p>
      <p className="mx-auto mb-8 text-center text-gray-500 max-w-80">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>
      {/* SLIDER BUTTON */}
      <div className="flex items-center justify-end mb-8">
        <button
          className="p-3 mr-3 bg-gray-200 rounded"
          aria-label="Previous Project"
          onClick={prevProject}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          className="p-3 mr-3 bg-gray-200 rounded"
          aria-label="Next Project"
          onClick={nextProject}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>
      {/* Project Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardToShow)}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt="Project.title"
                className="w-full h-auto mb-14"
              />
              <div className="absolute left-0 right-0 flex justify-center bottom-5">
                <div className="inline-block w-3/4 px-4 py-3 bg-white shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {project.price} <span>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
