import Image from "next/image";

import SoftwareVector from "../static/img/about/SoftwareVector.png";

export default function AboutMe() {
  return (
    <section id="about-me">
      <div className="bg-sky-100 lg:px-32 md:px-20 px-10 md:py-10 py-5 flex">
        <div className="w-3/5 inline-block my-auto">
          <p className="mb-3 text-6xl font-bold">Hi, I{"'"}m Carson,</p>
          <p className="mb-5 text-5xl font-semibold">
            a Fullstack Developer 👋
          </p>
          <p className="text-lg font-mono">
            I{"'"}m a passionate software developer interested in pursuing
            opportunities in the US. I have been coding for over 10 years, with
            2+ years of professional experience within the financial and oil and
            gas industries. I have experience working in both front-end and
            back-end technologies, though I have a preference for backend work.
            Explore my projects, experience and work history to learn more about
            me!
          </p>
        </div>

        <div className="w-2/5 inline-block">
          <Image
            alt="Software Vector"
            src={SoftwareVector}
            height={475}
            width={475}
            className="p-5 mx-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
}
