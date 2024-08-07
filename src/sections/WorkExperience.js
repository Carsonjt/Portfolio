import FlippableWorkCard from "@/components/FlippableWorkCard";
import CertispecCard from "@/components/workexperience/CertispecCard";
import FISPANCard from "@/components/workexperience/FISPANCard";
import NRCanCard from "@/components/workexperience/NRCanCard";

export default function WorkExperience() {
  return (
    <section id="work-experience">
      <div className="bg-sky-100 lg:px-32 md:px-20 sm:px-10 py-10 my-5 ">
        <p className="mb-3 text-4xl font-semibold text-center ">
          Work Experience
        </p>
        <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <FlippableWorkCard />
          <CertispecCard />
          <FISPANCard />
          <NRCanCard />
        </div>
      </div>
    </section>
  );
}
