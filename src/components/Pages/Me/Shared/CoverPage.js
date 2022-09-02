import { Typography } from "@mui/material";
import DecoratedTitle from "./DecoratedTitle";

function CoverPage({ title }) {
  return (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <DecoratedTitle title={title} variant="h1" decorationSize={250} />
      <div className="w-full h-[40%]">
        <Typography
          variant="h4"
          className="font-berkshire text-my-light-brown text-center"
        >
          To navigate the papers, use:
        </Typography>
        <div className="flex w-full h-full">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <img
              className="w-[23%]"
              alt=""
              src="/assets/images/mouse.svg"
            ></img>
            <Typography variant="h6" className="font-berkshire text-my-brown">
              Mouse Wheel
            </Typography>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-2">
            <div className="w-[10%] aspect-square border-8 border-my-orange-brown flex items-center justify-center">
              <Typography
                variant="h5"
                className="font-berkshire text-my-orange-brown"
              >
                W
              </Typography>
            </div>
            <div className="w-[10%] aspect-square border-8 border-my-orange-brown flex items-center justify-center">
              <Typography
                variant="h5"
                className="font-berkshire text-my-orange-brown"
              >
                S
              </Typography>
            </div>
            <Typography variant="h6" className="font-berkshire text-my-brown">
              Keyboard
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoverPage;
