import Image from "next/image";

import ReduxLogo from "../../static/img/skills/Redux.png";
import BasicsLogo from "../../static/img/skills/Basics.jpg";
import ReactLogo from "../../static/img/skills/React.png";
import ClickableIcon from "./ClickableIcon";

export default function FrontEnd() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold">Front-End Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ClickableIcon src={BasicsLogo} id="basics" name="Basics" />

          <div>
            <div className="px-5 min-h-28">
              <Image
                alt="React logo"
                src={ReactLogo}
                height={100}
                className="mx-auto"
              />
            </div>
            <p className="text-center">ReactJS</p>
          </div>

          <div>
            <div className="px-5 min-h-28">
              <Image
                alt="React logo"
                src={ReduxLogo}
                height={100}
                className="mx-auto"
              />
            </div>
            <p className="text-center">Redux</p>
          </div>
        </div>
      </div>
    </>
  );
}
