import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { useState } from "react";

export default function Projects({ projectData }: any): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const projectsPerPage = 4;
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projectData.length / projectsPerPage);

  // Handle pagination
  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  return (
    <section className="pt-28 w-screen min-h-screen flex flex-col items-center bg-[#0D1117]">
      <span className="text-2xl md:text-3xl text-[#01F53F] font-bold tracking-wide">
        Open Source Projects
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-[#01F53F] font-bold tracking-wide pl-4 pr-4">
        My personal Open Source Projects. Click to check them out!
      </p>
      <div className="flex justify-center mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-2 px-4 py-2 rounded ${
              currentPage === index + 1
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="w-full mt-2 pb-10 flex flex-row flex-wrap justify-center items-center">
        {currentProjects.map((project: any, _: any): JSX.Element => {
          return (
            <div
              key={_}
              className="relative w-full ml-2 mr-2 md:w-5/12 md:mr-6 mt-6 h-[35rem] pb-6 rounded-lg flex flex-col items-center bg-[#1E293B] shadow-xl hover:translate-y-2 transition-all ease-in-out"
            >
              <span className="flex absolute h-5 w-5 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-85"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-purple-500"></span>
              </span>
              <div className="mt-2 w-11/12 md:w-full flex justify-center items-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={450}
                  height={300}
                  priority
                />
              </div>
              <div className="w-11/12 flex flex-row justify-evenly items-center flex-wrap">
                {project.skills.map((skill: any, _: any) => {
                  return (
                    <div
                      key={_}
                      className="mt-6 mr-2 rounded-lg border-2 md:pl-4 md:pr-4 pl-2 pr-2 pt-1 pb-1 bg-green-500 text-white font-semibold"
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
              <p className="mt-6 font-bold tracking-wide text-2xl text-white underline text-center">
                {project.title}
              </p>
              <p className="pt-2 pl-2 pr-2 text-center tracking-widest text-lg text-white mb-12">
                {project.description}
              </p>
              <div className="flex flex-row justify-evenly items-center w-11/12 tracking-widest mt-auto text-center">
                {project.link && (
                  <Link
                    href={`${project.link}`}
                    className="pl-4 pr-4 md:pr-6 md:pl-6 pt-4 pb-4 rounded-lg bg-green-500 text-white hover:bg-green-600 text-xs md:text-lg tracking-widest shadow-lg mr-4 h-full flex justify-center items-center"
                    target="_blank"
                  >
                    Link to Website
                  </Link>
                )}
                <Link
                  className="pl-6 pr-6 pt-4 pb-4 rounded-lg bg-gray-600 text-white hover:bg-gray-700 text-xs md:text-lg flex flex-row justify-center items-center shadow-lg"
                  href={`${project.github}`}
                  target="_blank"
                >
                  <Image
                    className="mr-2"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github"
                    width={27}
                    height={27}
                  />
                  View Code
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
}
