import lang from "@/static/lang.json";

import KotlinLogo from "../../static/img/skills/Kotlin.jpg";
import MicroservicesLogo from "../../static/img/skills/Microservices.png";
import RestAPILogo from "../../static/img/skills/RestAPI.png";
import AuthenticationLogo from "../../static/img/skills/Authentication.png";
import EventStreamingLogo from "../../static/img/skills/EventStreaming.png";
import AndroidLogo from "../../static/img/skills/Android.png";
import ClickableSkillsIcon from "./ClickableSkillsIcon";

const iconMap = {
  fundamentals: KotlinLogo,
  microservices: MicroservicesLogo,
  restapis: RestAPILogo,
  authentication: AuthenticationLogo,
  eventstreaming: EventStreamingLogo,
  androiddevelopment: AndroidLogo,
};

export default function BackEnd() {
  const skillsIcons = lang.section.skills.backend.icons;
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">
          {lang.section.skills.backend.title}
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
