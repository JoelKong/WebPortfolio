import projectData from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";

export default function Projects(): JSX.Element {
  return (
    <section className="pt-28 w-screen h-full flex flex-col items-center bg-gradient-to-r from-green-200 to-green-300">
      <span className="text-3xl text-gray-500 font-bold tracking-wide">
        Open Source Projects
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-gray-500 font-bold tracking-wide">
        My personal Open Source Projects. Click to check them out!
      </p>
      <div className="w-full mt-6 pb-10 flex flex-row flex-wrap justify-center items-center">
        {projectData.map((project: any, _: any): JSX.Element => {
          return (
            <div
              key={_}
              className="w-full ml-2 mr-2 md:w-5/12 md:mr-6 mt-6 h-[26rem] pb-6 rounded-lg flex flex-col items-center bg-blue-400 shadow-xl hover:translate-y-2 transition-all ease-in-out"
            >
              <div className="mt-2 w-11/12 md:w-full flex justify-center items-center overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={450}
                  height={300}
                />
              </div>
              <div className="w-11/12 flex flex-row justify-evenly items-center">
                {project.skills.map((skill: any, _: any) => {
                  return (
                    <div
                      key={_}
                      className="mt-4 rounded-lg border-2 md:pl-4 md:pr-4 pl-2 pr-2 pt-1 pb-1 bg-green-500 text-white font-semibold"
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 font-bold tracking-wide text-xl">
                {project.title}
              </p>
              <p className="pt-2 pl-2 pr-2 text-center tracking-widest">
                {project.description}
              </p>
              <div className="flex flex-row justify-evenly items-center mt-12 w-full tracking-widest">
                {project.link && (
                  <Link
                    href={`${project.link}`}
                    className="pl-6 pr-6 pt-4 pb-4 rounded-lg bg-green-500 text-white hover:opacity-90 text-md tracking-widest shadow-lg"
                    target="_blank"
                  >
                    Link to Website
                  </Link>
                )}
                <Link
                  className="pl-6 pr-6 pt-4 pb-4 rounded-lg bg-gray-600 text-white hover:opacity-90 text-md flex flex-row justify-center items-center shadow-lg"
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
    </section>
  );
}