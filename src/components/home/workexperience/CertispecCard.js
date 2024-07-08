import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../../static/img/certispec.jpg";

export default function CertispecCard() {
  return (
    <Card className="m-3 max-w-md border rounded-lg my-3 border-indigo-400 bg-neutral-50">
      <CardActionArea>
        <CardContent>
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
          <div>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="my-1"
            >
              Software Developer
            </Typography>
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
            <Typography variant="body2" color="text.secondary" className="my-1">
              ◦ Redesigned official website, featuring roughly 50 site pages,
              service information, testimonials and more.
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
