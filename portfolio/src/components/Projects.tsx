import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";

export default function Projects({ projectData }: any): JSX.Element {
  return (
    <section className="pt-28 w-screen h-full flex flex-col items-center bg-[#0D1117]">
      <span className="text-3xl text-[#01F53F] font-bold tracking-wide">
        Open Source Projects
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-[#01F53F] font-bold tracking-wide pl-2 pr-2">
        My personal Open Source Projects. Click to check them out!
      </p>
      <div className="w-full mt-6 pb-10 flex flex-row flex-wrap justify-center items-center">
        {projectData.map((project: any, _: any): JSX.Element => {
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
              <p className="mt-6 font-bold tracking-wide text-2xl text-white underline">
                {project.title}
              </p>
              <p className="pt-2 pl-2 pr-2 text-center tracking-widest text-lg text-white mb-12">
                {project.description}
              </p>
              <div className="flex flex-row justify-evenly items-center w-full tracking-widest mt-auto">
                {project.link && (
                  <Link
                    href={`${project.link}`}
                    className="pl-4 pr-4 md:pr-6 md:pl-6 pt-4 pb-4 rounded-lg bg-green-500 text-white hover:bg-green-600 text-md tracking-widest shadow-lg"
                    target="_blank"
                  >
                    Link to Website
                  </Link>
                )}
                <Link
                  className="pl-6 pr-6 pt-4 pb-4 rounded-lg bg-gray-600 text-white hover:bg-gray-700 text-md flex flex-row justify-center items-center shadow-lg"
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
