import Image from "next/image";

import KotlinLogo from "../../static/img/skills/Kotlin.jpg";
import ReactLogo from "../../static/img/skills/React.png";

export default function FrontEnd() {
  return (
    <>
      <div>
        <p className="text-center text-xl font-semibold">Front-End Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Basics</p>
          </div>

          <div className="px-5">
            <Image
              alt="React logo"
              src={ReactLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">ReactJS</p>
          </div>

          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Redux</p>
          </div>
        </div>
      </div>
    </>
  );
}
