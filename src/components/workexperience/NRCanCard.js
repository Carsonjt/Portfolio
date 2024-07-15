import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import logo from "../../static/img/nrcan.svg";
import Image from "next/image";

export default function NRCan() {
  return (
    <Card className="m-3 border rounded-lg my-3 border-indigo-400 bg-neutral-50">
      <CardActionArea>
        <CardContent>
          <div className="flex justify-between items-center pb-1">
            <div className="flex items-center">
              <Image
                src={logo} // Path to your image
                alt="FISPAN Logo"
                width={35} // Desired width of the image
                height={35} // Desired height of the image
                className="mr-2"
              />
              <Typography
                variant="h7"
                component="span"
                className="tracking-tighter"
              >
                Natural Resources Canada
              </Typography>
            </div>
            <div>
              <Typography
                variant="div"
                component="span"
                className="tracking-tighter"
              >
                01/2021 - 08/2021
              </Typography>
            </div>
          </div>
          <Typography gutterBottom variant="h6" component="div">
            Software Developer Intern
          </Typography>
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
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
