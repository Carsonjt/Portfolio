import lang from "@/static/lang.json";

import EducationVector from "../static/img/education/EducationVector.png";
import Image from "next/image";

export default function Education() {
  return (
    <>
      <section id="education">
        <div className="bg-white-100 lg:px-32 md:px-20 px-10 md:py-10 flex flex-col lg:flex-row items-center text-center lg:text-left">
          <div className="w-full lg:w-2/5 inline-block">
            <Image
              alt="Education Vector"
              src={EducationVector}
              height={475}
              width={475}
              className="p-5 mx-auto"
            ></Image>
          </div>
          <div className="w-full lg:w-3/5 inline-block my-auto">
            <p className="mb-3 text-4xl font-semibold text-center">
              {lang.section.education.title}
            </p>
            <p className="text-lg font-mono">
              {lang.section.education.description}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
