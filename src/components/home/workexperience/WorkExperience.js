import CertispecCard from "./CertispecCard";
import FISPANCard from "./FISPANCard";
import NRCanCard from "./NRCanCard";

export default function WorkExperience() {
  return (
    <>
      <div className="flex">
        <CertispecCard />
        <FISPANCard />
        <NRCanCard />
      </div>
    </>
  );
}
