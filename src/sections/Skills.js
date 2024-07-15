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
        <p className="md:mx-5 lg:mx-10 mb-5 text-lg">
          Proficient in web development with expertise in NextJS and Postgres,
          having led the design and creation of an internal employee training
          portal. Experienced in automation using PowerShell for streamlined
          onboarding and offboarding processes. Skilled in website redesign,
          demonstrated by overhauling a 50-page official website, and adept in
          implementing CI/CD changes for Azure services to enhance development
          workflows. <b>Click to learn</b>
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
