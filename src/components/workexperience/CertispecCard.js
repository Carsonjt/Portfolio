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
    <div className="transform transition-transform duration-300">
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
            operations through designing new internal software tooling, updating
            legacy software, scripting workflow automation to streamline work
            procedures, and strategizing with management on opportunities to
            leverage software.
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
              • Developed Android App with Kotlin and Jetpack Compose for
              inventory tracking jobs and container inspections reducing
              billable hours by ~25% through convenient data input, data
              organization and auto-generated job reports.
            </li>
            <li>
              • Created internal employee training portal. Developed with NextJS
              and Postgres, includes scheduled reminders, internal statistics
              pages, OAuth implementation, role-based authentication and more.
            </li>
            <li>
              • Automated the onboarding and offboarding process for management
              through cloud and on-premise scripts which creates a user, assigns
              appropriate roles or licenses, connects with 3rd party software
              APIs and internal softwares.
            </li>
            <li>
              • Implemented CI/CD changes to Azure services such as Managed
              Identities, Runbooks, Logic Apps, Database Management and App
              Services for development pipeline optimizations.
            </li>
          </ul>
        </FormattedCard>
      </ReactCardFlip>
    </div>
  );
}
