import { Chrono } from "react-chrono";
import achievementData from "@/data/achievementData";

export default function Achievements(): JSX.Element {
  return (
    <section className="w-screen h-screen md:h-[50vw] flex justify-center snap-start">
      <div className="w-11/12 h-full">
        <Chrono
          items={achievementData}
          mode="VERTICAL_ALTERNATING"
          contentDetailsHeight={200}
        />
      </div>
    </section>
  );
}
