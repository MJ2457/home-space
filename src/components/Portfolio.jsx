import React from "react";
import { PORTFOLIO_PROJECTS } from "../constants";

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl text-center tracking-tight uppercase mt-20 mb-12">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden mx-4"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="text-xl font-medium mb-2">{project.name}</h3>
                <p className="mb-12 p-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
