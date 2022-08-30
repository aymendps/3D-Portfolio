import { Typography } from "@mui/material";
import Wrapper from "./Wrapper";

function About() {
  const pages = [
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      About me
    </Typography>,
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      About me 2
    </Typography>,
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      About me 3
    </Typography>,
    <Typography
      className="font-berkshire text-center text-[rgb(63,44,35)]"
      variant="h2"
    >
      About me 4
    </Typography>,
  ];
  return <Wrapper pages={pages}></Wrapper>;
}

export default About;
