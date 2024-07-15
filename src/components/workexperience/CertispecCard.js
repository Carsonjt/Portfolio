import { Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../static/img/certispec.jpg";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function CertispecCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => setIsFlipped(!isFlipped);

  return (
    <>
      <ReactCardFlip isFlipped={isFlipped}>
        {/* FRONT SIDE OF CARD*/}
        <div
          className="bg-white border border-2 p-3 rounded border-blue-400 h-[500px]"
          onClick={flipCard}
        >
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center">
              <Image
                src={logo} // Path to your image
                alt="Certispec Logo"
                width={50} // Desired width of the image
                height={50} // Desired height of the image
                className="mr-2"
              />
              <p>Certispec</p>
            </div>
            <div>
              <p>11/2023 - Present</p>
            </div>
          </div>
          <div className="mx-5">
            <p className="text-xl font-medium my-4">Lead Software Developer</p>
            <div>
              <span className="bg-emerald-200 py-1 px-2 rounded-lg m-1">
                NextJS
              </span>
              <span className="bg-emerald-200 py-1 px-2 rounded-lg m-1">
                REST APIs
              </span>
              <span className="bg-emerald-200 py-1 px-2 rounded-lg m-1">
                Authentication
              </span>
              <span className="bg-emerald-200 py-1 px-2 rounded-lg m-1">
                Azure
              </span>
              <span className="bg-emerald-200 py-1 px-2 rounded-lg m-1">
                CI/CD
              </span>
            </div>
            <p className="mt-5 text-md font-light">
              Currently working in a team of 3, leading the digitalization of
              core business operations through designing new internal software,
              scripting workflow automation and strategized with management on
              opportunities to expand market share.{" "}
            </p>
          </div>
          <div className="mx-5 mt-5 bg-indigo-100 border border-gray-300 rounded p-3 w-72 text-center absolute bottom-3 left-14">
            <p> 🌐 Click for more information!</p>
          </div>
        </div>

        {/* BACK SIDE OF CARD*/}
        <div
          className="bg-white border border-2 rounded p-3 border-blue-400 h-[500px]"
          onClick={flipCard}
        >
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
          <Typography variant="body2" color="text.secondary" className="my-1">
            ◦ Lead the design and creation of Internal employee training portal.
            Created with NextJS and Postgres and includes features scheduled
            reminders, internal statistics pages, OAuth implementation,
            role-based authentication and more.
          </Typography>
          <Typography variant="body2" color="text.secondary" className="my-1">
            ◦ Implemented CI/CD changes of Azure services such as Managed
            Identities, Runbooks, Logic Apps, Database Management, App Services
            for development and restructured development pipeline to follow
            industry best practices.
          </Typography>
          <Typography variant="body2" color="text.secondary" className="my-1">
            ◦ Automated the onboarding and offboarding process for management
            through a Powershell script which creates a user, assigns
            appropriate roles or licenses, connects with 3rd party software APIs
            and more.
          </Typography>
          <div className="mx-5 mt-5 bg-indigo-100 border border-gray-300 rounded p-3 w-72 text-center absolute bottom-3 left-14">
            <p> ⬅ Click again to go back</p>
          </div>
        </div>
      </ReactCardFlip>
    </>
  );
}
