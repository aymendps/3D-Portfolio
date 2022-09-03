import { Paper } from "@mui/material";

function PinnedPaper({ className, children }) {
  return (
    <Paper className={"relative " + className}>
      <img
        className="absolute right-0 top-0 w-[50px]"
        alt=""
        src="/assets/images/red-pin.png"
      ></img>
      {children}
    </Paper>
  );
}

export default PinnedPaper;
