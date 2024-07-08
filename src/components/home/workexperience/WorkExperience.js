import CertispecCard from "./CertispecCard";
import FISPANCard from "./FISPANCard";
import NRCanCard from "./NRCanCard";

export default function WorkExperience() {
  return (
    <>
      <div className="mt-10 font-semibold  tracking-tight text-4xl text-black">
        Work Experience
      </div>
      <div className="flex">
        <CertispecCard />
        <FISPANCard />
        <NRCanCard />
      </div>
    </>
  );
}
