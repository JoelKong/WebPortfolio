export default function Header({ selected, setSelected }: any): JSX.Element {
  function navigate(e: any): void {
    const navigatedPath = e.target.name;

    const updatedSelected = Object.fromEntries(
      Object.keys(selected).map((key) => [key, false])
    );
    updatedSelected[navigatedPath] = true;

    setSelected(updatedSelected);
  }

  return (
    <nav className="fixed z-10 w-screen h-16 bg-green-700 flex justify-center items-center">
      <div className="w-full md:w-3/4 flex flex-row justify-evenly font-semibold text-lg md:text-xl tracking-wider text-white">
        <button
          className="hover:text-gray-300"
          name="home"
          onClick={(e) => navigate(e)}
        >
          Home
        </button>
        <button
          className="hover:text-gray-300"
          name="skills"
          onClick={(e) => navigate(e)}
        >
          Skills
        </button>
        <button
          className="hover:text-gray-300"
          name="projects"
          onClick={(e) => navigate(e)}
        >
          Projects
        </button>
        <button
          className="hover:text-gray-300"
          name="contactMe"
          onClick={(e) => navigate(e)}
        >
          Contact Me
        </button>
      </div>
    </nav>
  );
}
