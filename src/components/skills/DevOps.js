import lang from "@/static/lang.json";

import VersionControlLogo from "../../static/img/skills/VersionControl.png";
import AzureLogo from "../../static/img/skills/Azure.png";
import CICDLogo from "../../static/img/skills/CICD.png";
import DockerLogo from "../../static/img/skills/Docker.png";
import ClickableSkillsIcon from "./ClickableSkillsIcon";

/* COPY OF JSON FOR CONTAINEIZATION FOR IF READDING
{
            "id": "containerization",
            "name": "Containerization",
            "description": "Containerization is essential for creating scalable and portable applications. I have extensive experience with containerization tools to streamline development and deployment processes.",
            "pointTitle": "Some key aspects of my containerization experience include:",
            "points": [
              {
                "text": "Creating and managing Docker containers for application isolation and consistency."
              },
              {
                "text": "Using Docker Compose for multi-container applications and orchestration."
              },
              {
                "text": "Implementing Kubernetes for container orchestration and management at scale."
              }
            ]
          },
          */

const iconMap = {
  cicd: CICDLogo,
  containerization: DockerLogo,
  versioncontrol: VersionControlLogo,
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
