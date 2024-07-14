import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import logo from "../../static/img/fispan.jpg";
import Image from "next/image";

export default function CertispecCard() {
  return (
    <Card className="m-3 lg:w-1/3 md:w-1/2 sm:w-4/5  border rounded-lg my-3 border-indigo-400 bg-neutral-50">
      <CardActionArea>
        <CardContent>
          <div className="flex justify-between items-center h-10">
            <div className="flex items-center">
              <Image
                src={logo} // Path to your image
                alt="FISPAN Logo"
                width={45} // Desired width of the image
                height={45} // Desired height of the image
              />
              <Typography
                variant="h7"
                component="span"
                className="tracking-tighter"
              >
                FI.SPAN
              </Typography>
            </div>
            <div>
              <Typography variant="div" component="span">
                08/2022 - 10/2023
              </Typography>
            </div>
          </div>
          <Typography gutterBottom variant="h6" component="div">
            Software Developer
          </Typography>
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
            ◦ Created a mock ERP microservice for local development which mimics
            outstanding, fully or partial paid payments and vendors. Used for
            reliability testing through generating large amounts of mock data
            for mass processing.
          </Typography>
          <Typography variant="body2" color="text.secondary" className="my-1">
            ◦ Developed client-facing features such as payment filtering, resync
            triggers, and more on both front and back end.
          </Typography>
          <Typography variant="body2" color="text.secondary" className="my-1">
            ◦ Abstracted system components such as Authentication to improve
            readability and scalability of implementing new ERPs
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
