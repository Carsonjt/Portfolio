import FrontEnd from "@/components/skills/FrontEnd";
import BackEnd from "@/components/skills/BackEnd";
import DevOps from "@/components/skills/DevOps";

export default function Skills() {
  return (
    <section id="skills">
      <div className="bg-white lg:px-32 md:px-20 sm:px-10 py-10 my-5 ">
        <p className="mb-3 text-4xl font-semibold text-center">
          Skills & Technologies
        </p>
        <p className="mb-3 text-lg">
          This is a description for my skills & technologies
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
