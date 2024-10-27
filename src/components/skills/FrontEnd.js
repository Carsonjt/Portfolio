import lang from "@/static/lang.json";

import ReduxLogo from "../../static/img/skills/Redux.png";
import BasicsLogo from "../../static/img/skills/Basics.jpg";
import ReactLogo from "../../static/img/skills/React.png";

import ClickableSkillsIcon from "./ClickableSkillsIcon";

const iconMap = {
  basics: BasicsLogo,
  react: ReactLogo,
  redux: ReduxLogo,
};

export default function FrontEnd() {
  const skillsIcons = lang.section.skills.frontend.icons;
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">
          {lang.section.skills.frontend.title}
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
              />
            ))}
        </div>
      </div>
    </>
  );
}
