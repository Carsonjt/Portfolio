import ReduxLogo from "../../static/img/skills/Redux.png";
import BasicsLogo from "../../static/img/skills/Basics.jpg";
import ReactLogo from "../../static/img/skills/React.png";
import ClickableSkillsIcon from "../ClickableSkillsIcon";

export default function FrontEnd() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">
          Front-End Skills
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
          <ClickableSkillsIcon src={BasicsLogo} id="basics" name="Basics" />
          <ClickableSkillsIcon src={ReactLogo} id="react" name="React" />
          <ClickableSkillsIcon src={ReduxLogo} id="redux" name="Redux" />
          <ClickableSkillsIcon
            src={ReduxLogo}
            id="redux"
            name="Jetpack Compose"
            learning
          />
        </div>
      </div>
    </>
  );
}
