import Image from "next/image";
import Link from "next/link";
import Achievements from "./Achievements";

export default function Introduction(): JSX.Element {
  return (
    <main className="max-h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <div className="pt-20 h-screen w-screen bg-gradient-to-r from-green-200 to-green-300 flex md:flex-row flex-col-reverse snap-center">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <div className="w-3/4 h-3/4 flex flex-col pl-4 justify-center">
            <p className="text-5xl md:text-6xl tracking-wider leading-snug text-red-400 font-bold md:mt-0 mt-6">
              Hi, My Name is <br></br> Joel Kong
            </p>
            <p className="mt-8 md:mt-10 text-xl font-semibold tracking-wide text-gray-500">
              Aspiring Software Engineer with a drive to make a difference
              through technology and make the world a better place
            </p>
            <div className="mt-10 text-xl font-semibold tracking-wide flex flex-row w-full">
              <Link
                href="https://github.com/JoelKong"
                target="_blank"
                className="pr-10"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="github"
                  width={40}
                  height={40}
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joel-kong/"
                target="_blank"
                className="pr-10"
              >
                <Image
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="github"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:mt-0 mt-14 h-full flex justify-center items-center">
          <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-[50%] overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={"/joelphoto.jpg"}
              alt="joelphoto"
              height={400}
              width={400}
            />
          </div>
        </div>
      </div>
      <Achievements />
    </main>
  );
}
