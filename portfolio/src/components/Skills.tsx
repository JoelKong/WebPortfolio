import skillData from "@/data/skillData";
import Image from "next/image";

export default function Skills(): JSX.Element {
  return (
    <section className="pt-28 w-full h-full flex flex-col items-center bg-gradient-to-r from-green-200 to-green-300">
      <span className="text-3xl text-gray-500 font-bold tracking-wide">
        Skills
      </span>
      <p className="text-lg md:text-xl text-center pt-4 text-gray-500 font-bold tracking-wide">
        Programming languages and skills that I have worked with
      </p>
      <div className="w-full md:w-3/4 mt-6 pb-10 flex flex-row flex-wrap justify-center items-center">
        {skillData.map((skills: any, _: any): JSX.Element => {
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
              />
              <span className="pt-4 font-semibold text-xl tracking-wide">
                {skills.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
