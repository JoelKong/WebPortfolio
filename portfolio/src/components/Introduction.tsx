import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Achievements from "./Achievements";
import Footer from "@/components/Footer";
import Github from "@/utils/Github";

export default function Introduction({ achievementData }: any): JSX.Element {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const introText = "Hi, My Name is Joel Kong";
    let index = 0;
    let cursorInterval: any;

    const typingEffect = () => {
      if (index <= introText.length) {
        setText(introText.substring(0, index));
        index++;
        setTimeout(typingEffect, 40);
      } else {
        cursorInterval = setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    };

    typingEffect();

    const intervalTimeout = setTimeout(() => {
      clearInterval(cursorInterval);
      setShowCursor(false);
    }, 2000);

    return () => {
      clearTimeout(intervalTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <main className="max-h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory">
      <div className="pt-20 h-screen w-screen bg-[#0D1117] flex md:flex-row flex-col-reverse snap-center">
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <div className="w-11/12 md:w-3/4 h-3/4 flex flex-col pl-4 justify-center">
            <p className="text-5xl md:text-6xl tracking-wider leading-snug text-[#01F53F] font-bold md:mt-0 mt-6 min-h-36">
              {text}
              <span className={showCursor ? "opacity-100" : "opacity-0"}>
                |
              </span>
            </p>
            <p className="mt-6 md:mt-10 text-xl font-semibold tracking-wide text-gray-400">
              Aspiring Software Engineer with a drive to make a difference
              through technology and make the world a better place
            </p>
            <div className="mt-10 md:mb-0 mb-10 text-xl font-semibold tracking-wide flex flex-row w-full">
              <Link
                href="https://github.com/JoelKong"
                target="_blank"
                className="pr-10"
              >
                <Github />
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
              <a
                className="bg-[#01F53F] font-bold text-md pl-4 pr-4 pt-1 pb-1 rounded-lg hover:bg-green-500"
                href="./JoelKongBoonWei_Resume.pdf"
                download
                target="_blank"
              >
                View CV
              </a>
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
              priority
            />
          </div>
        </div>
      </div>
      <Achievements achievementData={achievementData} />
      <Footer />
    </main>
  );
}
