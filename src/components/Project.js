import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import sanityClient from "../client  ";

export default function Project() {
  

  const [projectData, setProjectDate] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place, 
          description, 
          projectType, 
          link, 
          tags 
        }`
      )
      .then((data) => setProjectDate(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-blue-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center  mb-1 cursive">
          My Projects
        </h1>
        <h2 className="text-lg text-grey-600 flex justify-center mb-12">
          Here are Some projects
        </h2>
        <section className="grid grid-cols-2 gap-8">
          {projectData &&
            projectData.map((project, index) => (
              <article className="relitive rounded-lg shadow-xl bg-white p-5">
                <h3 className="text-grey-800 text-3xl font-bold mb-2 hovrt:text-blue-700">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreffer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-grey-500 text-xs spacex-4">
                  <span>
                    <strong className="font-bold">Finished on</strong>:{" "}
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>
                    <strong className="font-bold">Company</strong>{" "}
                    {project.place}
                  </span>
                  <span>
                    <strong className="font-bold">type</strong>{" "}
                    {project.projectType}
                  </span>
                  <p className="my-6 text-lg text-grey-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <a
                  href={project.link}
                  alt={project.title}
                  target="_blank"
                  rel="noopener noreffer"
                  className="text-red-500 font-bold hover:underline hover:text-red-500"
                >
                  View the project{" "}
                  <span role="img" aria-label="right-pointer"></span>
                </a>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
}
