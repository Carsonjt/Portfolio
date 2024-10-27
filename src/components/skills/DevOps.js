import lang from "@/static/lang.json";

import VersionControlLogo from "../../static/img/skills/VersionControl.png";
import AzureLogo from "../../static/img/skills/Azure.png";
import CICDLogo from "../../static/img/skills/CICD.png";
import DockerLogo from "../../static/img/skills/Docker.png";
import ClickableSkillsIcon from "./ClickableSkillsIcon";

const iconMap = {
  cicd: CICDLogo,
  containerization: DockerLogo,
  azure: AzureLogo,
};

export default function DevOps() {
  const skillsIcons = lang.section.skills.devops.icons;
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">
          {lang.section.skills.devops.title}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
          {Array.isArray(skillsIcons) &&
            skillsIcons.map((icon) => (
              <ClickableSkillsIcon
                key={icon.id}
                src={iconMap[icon.id]}
                name={icon.name}
                description={icon.description}
                pointTitle={icon.pointTitle}
                points={icon.points}
                learning={icon.learning}
              />
            ))}
        </div>
      </div>
    </>
  );
}
