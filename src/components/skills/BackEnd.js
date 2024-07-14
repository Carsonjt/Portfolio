import Image from "next/image";

import KotlinLogo from "../../static/img/skills/Kotlin.jpg";
import MicroservicesLogo from "../../static/img/skills/Microservices.png";

export default function BackEnd() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold ">Back-End Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="px-5 min-h-28">
              <Image
                alt="Kotlin logo"
                src={KotlinLogo}
                height={95}
                className="mx-auto"
              />
            </div>
            <p className="text-center">Languages</p>
          </div>

          <div>
            <div className="px-5 min-h-28">
              <Image
                alt="Microservices logo"
                src={MicroservicesLogo}
                height={100}
                className="mx-auto"
              />
            </div>
            <p className="text-center">Microservices</p>
          </div>
          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">REST APIs</p>
          </div>
          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Authentication</p>
          </div>
          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Event Streaming</p>
          </div>
        </div>
      </div>
    </>
  );
}
