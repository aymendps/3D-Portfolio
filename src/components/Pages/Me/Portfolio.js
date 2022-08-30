import { Typography } from "@mui/material";
import Wrapper from "./Wrapper";

function Portfolio() {
  const pages = [
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      My Portfolio
    </Typography>,
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      About me 2
    </Typography>,
  ];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Portfolio;
