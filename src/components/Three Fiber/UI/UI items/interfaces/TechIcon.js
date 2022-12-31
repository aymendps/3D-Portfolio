import { Typography } from "@mui/material";

function TechIcon({ className, name, imgWidth, url }) {
  return (
    <div
      // Don't delete the space before concat className
      className={
        className
          ? "flex flex-col justify-center items-center " + className
          : "flex flex-col justify-center items-center"
      }
    >
      <img
        style={{
          width: imgWidth || "50px",
        }}
        alt=""
        src={url}
        className="aspect-square"
      ></img>
      {name && (
        <Typography variant="h6" className="font-berkshire text-my-brown pt-2">
          {name}
        </Typography>
      )}
    </div>
  );
}

export default TechIcon;
