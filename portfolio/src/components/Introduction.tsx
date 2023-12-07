import Image from "next/image";
import Link from "next/link";

export default function Introduction(): JSX.Element {
  return (
    <div className="pt-20 h-screen w-screen bg-gradient-to-r from-green-200 to-green-300 flex md:flex-row flex-col-reverse">
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-3/4 h-3/4 flex flex-col pl-4">
          <p className="text-6xl tracking-wider leading-snug text-red-400 font-bold">
            Hi, My Name is <br></br> Joel Kong
          </p>
          <p className="mt-10 text-xl font-semibold tracking-wide text-gray-500">
            Aspiring Software Engineer with a drive to make a difference through
            technology and make the world a better place
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
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="w-96 h-96 rounded-[50%] overflow-hidden">
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
  );
}
