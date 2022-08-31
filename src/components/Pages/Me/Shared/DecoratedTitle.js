import { Typography } from "@mui/material";

function DecoratedTitle({ title }) {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <img
        className="w-[120px]"
        style={{ transform: "rotateY(180deg)" }}
        src="/assets/images/title-decoration.png"
        alt=""
      ></img>
      <Typography
        className="font-berkshire text-center text-my-brown font-bold"
        variant="h2"
      >
        {title}
      </Typography>
      <img
        className="w-[120px]"
        src="/assets/images/title-decoration.png"
        alt=""
      ></img>
    </div>
  );
}

export default DecoratedTitle;
