"use client";

import { Typography } from "@mui/material";
import logo from "../../static/img/fispan.jpg";
import ReactCardFlip from "react-card-flip";
import FormattedCard from "./FormattedCard";
import React from "react";

export default function CertispecCard() {
  const company = "FI.SPAN";
  const time = "08/2022 - 10/2023";
  const title = "Software Developer Intern > Full Time";

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
          <p className="mt-5 text-lg font-light">
            Worked on integrations team, using Kotlin for extensive backend REST
            API development, with a heavy focus on asynchronous data handling
            and endpoint security. Focused primarily on businesses core
            microservice with an emphasis on high reliability and scalability of
            payment processing and handling.
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
              ◦ Implemented batch payment processing and failed payment retry
              mechanisms, designed to improve reliability of payment processing
              ensuring a 100% success rate in payment processing at high scale.
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Extensive backend REST API development, with a heavy focus on
              asynchronous data handling and endpoint security
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Created a mock ERP microservice for local development which
              mimics outstanding, fully or partial paid payments and vendors.
              Used for reliability testing through generating large amounts of
              mock data for mass processing.
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Developed client-facing features such as payment filtering,
              resync triggers, and more on both front and back end.
            </Typography>
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Abstracted system components such as Authentication to improve
              readability and scalability of implementing new ERPs
            </Typography>
          </div>
        </FormattedCard>
      </ReactCardFlip>
    </div>
  );
}
