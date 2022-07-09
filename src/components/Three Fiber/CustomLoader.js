import React from "react";
import { CircularProgress, Typography } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";

function CustomLoader() {
  const progress = useProgress((state) => state.progress);

  return (
    <>
      <Html center>
        <div className="w-[800px] flex flex-col justify-center items-center">
          <Typography
            fontFamily="'Arizonia', cursive;"
            fontWeight="bold"
            textAlign="center"
            variant="h2"
          >
            {`Aymen Hammami ${Math.floor(progress)}%`}
          </Typography>
          <CircularProgress className="text-white" />
        </div>
      </Html>
    </>
  );
}

export default CustomLoader;
