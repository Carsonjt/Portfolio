import VersionControlLogo from "../../static/img/skills/VersionControl.png";
import AzureLogo from "../../static/img/skills/Azure.png";
import CICDLogo from "../../static/img/skills/CICD.png";
import DockerLogo from "../../static/img/skills/Docker.png";
import ClickableSkillsIcon from "../ClickableSkillsIcon";

export default function DevOps() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">DevOps Skills</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
          <ClickableSkillsIcon
            src={VersionControlLogo}
            id="version-control"
            name="Version Control"
          />
          <ClickableSkillsIcon src={AzureLogo} id="azure" name="Azure" />
          <ClickableSkillsIcon src={CICDLogo} id="ci-cd" name="CI/CD" />
          <ClickableSkillsIcon src={DockerLogo} id="docker" name="Docker" />
        </div>
      </div>
    </>
  );
}
