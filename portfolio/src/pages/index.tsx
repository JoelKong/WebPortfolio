import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from "react";
import achievementData from "@/data/achievementData";
import projectData from "@/data/projectData";
import skillData from "@/data/skillData";

export default function Home({
  achievementData,
  projectData,
  skillData,
}: any): JSX.Element {
  const [selected, setSelected] = useState<any>({
    home: true,
    skills: false,
    projects: false,
    contactMe: false,
  });

  return (
    <>
      <Header selected={selected} setSelected={setSelected} />
      {selected.home && <Introduction achievementData={achievementData} />}
      {selected.skills && <Skills skillData={skillData} />}
      {selected.projects && <Projects projectData={projectData} />}
      {selected.contactMe && <ContactMe />}
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      achievementData: achievementData,
      projectData: projectData,
      skillData: skillData,
    },
  };
}
