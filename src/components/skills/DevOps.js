import Image from "next/image";

import KotlinLogo from "../../static/img/skills/Kotlin.jpg";
import VersionControlLogo from "../../static/img/skills/VersionControl.png";
import AzureLogo from "../../static/img/skills/Azure.png";
import CICDLogo from "../../static/img/skills/CICD.png";

export default function DevOps() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold">DevOps Skills</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="px-5">
            <Image
              alt="Version Control"
              src={VersionControlLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Version Control</p>
          </div>

          <div className="px-5">
            <Image
              alt="Azure logo"
              src={AzureLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Azure</p>
          </div>

          <div className="px-5">
            <Image
              alt="CI/CD logo"
              src={CICDLogo}
              height={125}
              width={125}
              className="mx-auto"
            />
            <p className="text-center">CI/CD</p>
          </div>

          <div className="px-5">
            <Image
              alt="Kotlin logo"
              src={KotlinLogo}
              height={75}
              width={75}
              className="mx-auto"
            />
            <p className="text-center">Containerization</p>
          </div>
        </div>
      </div>
    </>
  );
}
