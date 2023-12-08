import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useState } from "react";
import achievementData from "@/data/achievementData";
import projectData from "@/data/projectData";
import skillData from "@/data/skillData";
import Head from "next/head";

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
      <Head>
        <title>Joel Kong Website Portfolio</title>
        <meta name="description" content="Joel Kong Website Portfolio" />
        <meta name="og:title" content="Joel Kong Website Portfolio" />
        <meta property="og:description" content="Joel Kong Website Portfolio" />
        <meta property="og:url" content="https://www.joelkong.com/" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico"></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        ></link>
      </Head>
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
