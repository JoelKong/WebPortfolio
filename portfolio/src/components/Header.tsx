import { useState } from "react";

export default function Header(): JSX.Element {
  const [selected, setSelected] = useState<any>({
    home: true,
    skills: false,
    projects: false,
    contactMe: false,
  });

  function navigate(e: any): void {
    const navigatedPath = e.target.name;

    const updatedSelected = Object.fromEntries(
      Object.keys(selected).map((key) => [key, false])
    );
    updatedSelected[navigatedPath] = true;

    setSelected(updatedSelected);
  }

  return (
    <nav className="relative z-10 w-screen h-20 bg-green-300 flex justify-center items-center">
      <div className="w-full md:w-3/4 flex flex-row justify-evenly font-semibold text-lg md:text-xl tracking-wider">
        <button
          className="hover:text-green-700"
          name="home"
          onClick={(e) => navigate(e)}
        >
          Home
        </button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact Me</button>
      </div>
    </nav>
  );
}
