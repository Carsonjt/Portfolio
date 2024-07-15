import KotlinLogo from "../../static/img/skills/Kotlin.jpg";
import MicroservicesLogo from "../../static/img/skills/Microservices.png";
import RestAPILogo from "../../static/img/skills/RestAPI.png";
import AuthenticationLogo from "../../static/img/skills/Authentication.png";
import EventStreamingLogo from "../../static/img/skills/EventStreaming.png";
import AndroidLogo from "../../static/img/skills/Android.png";
import ClickableSkillsIcon from "../ClickableSkillsIcon";

export default function BackEnd() {
  return (
    <>
      <div className="mx-5">
        <p className="text-center text-xl font-semibold mb-5">
          Back-End Skills
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
          <ClickableSkillsIcon
            src={KotlinLogo}
            id="languages"
            name="Languages"
          />
          <ClickableSkillsIcon
            src={RestAPILogo}
            id="rest-apis"
            name="REST APIs"
          />
          <ClickableSkillsIcon
            src={AuthenticationLogo}
            id="authentication"
            name="Authentication"
          />
          <ClickableSkillsIcon
            src={MicroservicesLogo}
            id="microservices"
            name="Microservices"
          />
          <ClickableSkillsIcon
            src={EventStreamingLogo}
            id="event-streaming"
            name="Event Streaming"
          />
          <ClickableSkillsIcon
            src={AndroidLogo}
            id="android"
            name="Android Development"
            learning
          />
        </div>
      </div>
    </>
  );
}
