import Image from "next/image";
import linkedin from "../../static/img/linkedin.png";
import github from "../../static/img/github.png";

export default function Socials() {
  return (
    <>
      <div className="border rounded-lg my-3 p-3 border-indigo-400 bg-neutral-50">
        <div className="flex mb-2">
          <Image
            src={linkedin} // Path to your image
            alt="LinkedIn"
            width={25} // Desired width of the image
            height={25} // Desired height of the image
            className="mr-2"
          />
          <div> /carsonjtodd</div>
        </div>
        <div className="flex">
          <Image
            src={github} // Path to your image
            alt="Github"
            width={25} // Desired width of the image
            height={25} // Desired height of the image
            className="mr-2"
          />
          <div> /Carsonjt</div>
        </div>
      </div>
    </>
  );
}
