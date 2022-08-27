import { Typography } from "@mui/material";
import Wrapper from "./Wrapper";

function Contact() {
  return (
    <Wrapper>
      <div className="basis-[96%] p-4 border-l-2 border-[rgb(63,44,35)]">
        <Typography
          className="font-berkshire text-center text-[rgb(63,44,35)]"
          variant="h2"
        >
          Contact me
        </Typography>
      </div>
      <div className="basis-[2%] bg-[rgba(63,44,35,0.4)]"></div>
      <div className="basis-[2%] bg-[rgba(63,44,35,0.5)] border-r-2 border-[rgb(63,44,35)]"></div>
    </Wrapper>
  );
}

export default Contact;
