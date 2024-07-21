"use client";

import { Typography } from "@mui/material";
import logo from "../../static/img/certispec.jpg";
import ReactCardFlip from "react-card-flip";
import FormattedCard from "./FormattedCard";
import React from "react";

export default function CertispecCard() {
  const company = "Certispec";
  const time = "11/2023 - Present";
  const title = "Lead Software Developer";

  const [isFlipped, setIsFlipped] = React.useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <div className="mx-5">
      <ReactCardFlip isFlipped={isFlipped}>
        {/* FRONT SIDE OF CARD*/}
        <FormattedCard
          logo={logo}
          company={company}
          time={time}
          isFront={true}
          title={title}
          flipCard={flipCard}
        >
          <p className="mt-5 text-md font-light">
            Currently working in a team of 3, leading the digitalization of core
            business operations through designing new internal software,
            scripting workflow automation and strategized with management on
            opportunities to expand market share.
          </p>
        </FormattedCard>

        {/* BACK SIDE OF CARD*/}
        <FormattedCard
          logo={logo}
          company={company}
          time={time}
          isFront={false}
          title={title}
          flipCard={flipCard}
        >
          <div>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Lead the design and creation of Internal employee training
              portal. Created with NextJS and Postgres and includes features
              scheduled reminders, internal statistics pages, OAuth
              implementation, role-based authentication and more.
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Implemented CI/CD changes of Azure services such as Managed
              Identities, Runbooks, Logic Apps, Database Management, App
              Services for development and restructured development pipeline to
              follow industry best practices.
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Automated the onboarding and offboarding process for management
              through a Powershell script which creates a user, assigns
              appropriate roles or licenses, connects with 3rd party software
              APIs and more.
            </Typography>
          </div>
        </FormattedCard>
      </ReactCardFlip>
    </div>
  );
}
