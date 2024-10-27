"use client";

import { Typography } from "@mui/material";
import logo from "../../static/img/certispec.jpg";
import ReactCardFlip from "react-card-flip";
import FormattedCard from "./FormattedCard";
import React from "react";

export default function CertispecCard() {
  const company = "Certispec";
  const time = "11/2023 - Present";
  const title = "Software Developer";

  const [isFlipped, setIsFlipped] = React.useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="transform hover:scale-105 transition-transform duration-300">
      <ReactCardFlip isFlipped={isFlipped}>
        <FormattedCard
          logo={logo}
          company={company}
          time={time}
          isFront={true}
          title={title}
          flipCard={flipCard}
        >
          <p className="mt-5 text-lg font-light">
            Leading a team of 3, focusing on the digitalization of core business
            operations through designing new internal software, scripting
            workflow automation to streamline work procedures, and strategizing
            with management on opportunities to leverage software.
          </p>
        </FormattedCard>

        <FormattedCard
          logo={logo}
          company={company}
          time={time}
          isFront={false}
          title={title}
          flipCard={flipCard}
        >
          <ul className="space-y-3 text-sm font-light">
            <li>
              • Designed and created an internal employee training portal.
            </li>
            <li>• Implemented CI/CD changes of Azure services.</li>
            <li>• Automated the onboarding and offboarding process.</li>
          </ul>
        </FormattedCard>
      </ReactCardFlip>
    </div>
  );
}
