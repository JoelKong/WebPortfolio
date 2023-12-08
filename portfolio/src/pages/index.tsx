import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home(): JSX.Element {
  const [selected, setSelected] = useState<any>({
    home: true,
    skills: false,
    projects: false,
    contactMe: false,
  });

  return (
    <>
      <Header selected={selected} setSelected={setSelected} />
      {selected.home && <Introduction />}
      {selected.skills && <Skills />}
      {selected.projects && <Projects />}
      {selected.contactMe && <ContactMe />}
    </>
  );
}
