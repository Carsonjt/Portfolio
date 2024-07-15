import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../static/img/certispec.jpg";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import { Button } from "react-scroll";

export default function CertispecCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped}>
        {/* FRONT SIDE OF CARD*/}
        <div className="bg-white border border-2 p-3 border-blue-400">
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center">
              <Image
                src={logo} // Path to your image
                alt="FISPAN Logo"
                width={40} // Desired width of the image
                height={40} // Desired height of the image
                className="mr-2"
              />
              <Typography
                variant="h7"
                component="span"
                className="tracking-tighter"
              >
                Certispec
              </Typography>
            </div>
            <div>
              <Typography variant="div" component="span">
                11/2023 - Present
              </Typography>
            </div>
          </div>
          <Button onClick={flipCard}>Click to flip</Button>
        </div>

        {/* BACK SIDE OF CARD*/}
        <div className="bg-white">
          This is the back of the card.
          <Button onClick={flipCard}>Click to flip</Button>
        </div>
      </ReactCardFlip>
    </>
  );
}
