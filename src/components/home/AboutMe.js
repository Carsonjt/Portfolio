import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <>
      <div className="mt-3 m-0 p-3 bg-gray-700 flex rounded-t-lg"></div>
      <div className="min-h-40 m-0 p-3 bg-gray-500 text-white font-mono tracking-tighter rounded-b-lg">
        <span className="text-green-500">{"$: /home > "}</span>
        <span> aboutme</span>
        <div>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " Hello, I'm a passionate software developer interested in pursuing opportunities in the US. I have been coding for over 6 years, with 2+ years of professional experience within the financial and oil and gas industries. I have experience working in both front-end and back-end technologies, though I have a preference for backend work. Explore my projects, experience and work history to learn more about me!",
              1000,
            ]}
            wrapper="span"
            speed={99}
            repeat={Infinity}
          />
        </div>
      </div>
    </>
  );
}
