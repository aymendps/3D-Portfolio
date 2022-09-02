import { Typography } from "@mui/material";

function DecoratedTitle({ title, variant, decorationSize }) {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <img
        style={{ transform: "rotateY(180deg)", width: decorationSize + "px" }}
        src="/assets/images/title-decoration.png"
        alt=""
      ></img>
      <Typography
        className="font-berkshire text-center text-my-brown font-bold"
        variant={variant}
      >
        {title}
      </Typography>
      <img
        style={{ width: decorationSize + "px" }}
        src="/assets/images/title-decoration.png"
        alt=""
      ></img>
    </div>
  );
}

export default DecoratedTitle;
