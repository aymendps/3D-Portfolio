import { Typography } from "@mui/material";

const DEFAULT_ICON_WIDTH = "50px";

function TechIcon({ className, name, imgWidth, imgHeight, url }) {
  return (
    <div className={"flex flex-col justify-center items-center " + className}>
      <img
        style={{
          width: imgWidth || DEFAULT_ICON_WIDTH,
          height: imgHeight || DEFAULT_ICON_WIDTH,
        }}
        alt=""
        src={url}
      ></img>
      <Typography variant="h6" className="font-berkshire text-my-brown pt-2">
        {name}
      </Typography>
    </div>
  );
}

export default TechIcon;
