import Image from "next/image";
import Footer from "./Footer";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

export default function Skills({ skillData }: any): JSX.Element {
  const [toggleSkill, setToggleSkill] = useState(false);

  return (
    <section className="pt-28 w-full h-full flex flex-col items-center bg-[#0D1117]">
      <span className="text-2xl md:text-3xl text-[#01F53F] font-bold tracking-wide">
        Skills
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-[#01F53F] font-bold tracking-wide pl-4 pr-4">
        Programming languages and skills that I have worked with
      </p>
      <div className="w-3/4 h-12 pl-6 pr-6 border-2 mt-6 bg-gray-300 shadow-xl rounded-lg flex justify-center items-center">
        <p className="mr-auto">AWS Certified Solutions Architect - Associate</p>
        <a
          className="bg-[#01F53F] font-bold text-md pl-4 pr-4 pt-1 pb-1 rounded-lg hover:bg-green-500"
          href="./solutionarchitect.pdf"
          download
          target="_blank"
        >
          View Certificate
        </a>
      </div>
      {toggleSkill && (
        <div className="w-full md:w-3/4 pb-10 flex flex-row flex-wrap justify-center items-center rounded-md border-l-2 border-r-2 border-b-2">
          {skillData.saa.map((skills: any, _: any): JSX.Element => {
            return (
              <div
                key={_}
                className="w-10/12 md:w-3/12 md:mr-6 mt-6 h-48 rounded-lg flex flex-col justify-center items-center bg-white shadow-xl"
              >
                <Image
                  src={skills.image}
                  alt={skills.name}
                  width={80}
                  height={80}
                  priority
                />
                <span className="pt-6 font-semibold text-xl tracking-wide">
                  {skills.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
      <div className="w-full md:w-3/4 mt-2 pb-10 flex flex-row flex-wrap justify-center items-center">
        {skillData.general.map((skills: any, _: any): JSX.Element => {
          return (
            <div
              key={_}
              className="w-10/12 md:w-3/12 md:mr-6 mt-6 h-48 rounded-lg flex flex-col justify-center items-center bg-white shadow-xl"
            >
              <Image
                src={skills.image}
                alt={skills.name}
                width={80}
                height={80}
                priority
              />
              <span className="pt-6 font-semibold text-xl tracking-wide">
                {skills.name}
              </span>
            </div>
          );
        })}
      </div>
      <Footer />
    </section>
  );
}
