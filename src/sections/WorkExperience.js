import CertispecCard from "@/components/workexperience/CertispecCard";
import FISPANCard from "@/components/workexperience/FISPANCard";
import NRCanCard from "@/components/workexperience/NRCanCard";

export default function WorkExperience() {
  return (
    <section id="experience" className="bg-sky-100 py-16">
      <div className="container mx-auto">
        <p className="mb-8 text-5xl font-bold text-center text-gray-800">
          Work Experience
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <CertispecCard />
          <FISPANCard />
          <NRCanCard />
        </div>
      </div>
    </section>
  );
}
