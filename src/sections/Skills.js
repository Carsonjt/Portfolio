import lang from "@/static/lang.json";

import FrontEnd from "@/components/skills/FrontEnd";
import BackEnd from "@/components/skills/BackEnd";
import DevOps from "@/components/skills/DevOps";

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white lg:px-32 md:px-20 sm:px-10 py-10 my-5 ">
        <p className="mb-3 text-4xl font-semibold text-center">
          {lang.section.skills.title}
        </p>
        <p className="mx-10 mb-10 text-lg font-mono">
          {lang.section.skills.description}
        </p>
        <div className="flex justify-around">
          <FrontEnd />
          <BackEnd />
          <DevOps />
        </div>
      </div>
    </section>
  );
}
