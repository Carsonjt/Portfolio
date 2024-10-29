import { Typography } from "@mui/material";
import logo from "../../static/img/nrcan.jpg";
import FormattedCard from "./FormattedCard";
import ReactCardFlip from "react-card-flip";
import React from "react";

export default function NRCan() {
  const company = "Government of Canada";
  const time = "01/2021 - 08/2021";
  const title = "Software Developer Intern";

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
            Assigned responsibility for overhaul of internal web-app for
            downloading federal and jurisdiction data relating to forestry data
            tracking and management. Data includes image, metadata, CSV and
            zipped content.
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
          <Typography variant="body2" color="text.secondary">
            ◦ Performed back-end overhaul to data download web-app which allowed
            the selection of different data sets over time periods corresponding
            with user permission levels - includes images, metadata, CSV and
            packaged data.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ◦ Redesigned the download tools front-end to accommodate back-end
            updates and provide a visual overhaul.
          </Typography>
        </FormattedCard>
      </ReactCardFlip>
    </div>
  );
}
