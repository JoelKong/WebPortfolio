import { Chrono } from "react-chrono";

export default function Achievements({ achievementData }: any): JSX.Element {
  return (
    <section className="w-screen h-screen md:h-[50vw] flex justify-center snap-start bg-[#0D1117]">
      <div className="w-10/12 h-full pt-14">
        <Chrono
          items={achievementData}
          mode="VERTICAL_ALTERNATING"
          contentDetailsHeight={200}
          theme={{
            titleColor: "#01F53F",
            primary: "#01F53F",
            secondary: "#0D1117",
          }}
        />
      </div>
    </section>
  );
}
