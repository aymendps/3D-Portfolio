import React from "react";
import { LinearProgress, Typography } from "@mui/material";
import { Html, useProgress } from "@react-three/drei";

function CustomLoader() {
  const progress = useProgress((state) => state.progress);

  return (
    <Html center wrapperClass="main-canvas-loading-screen">
      <Typography fontWeight="bold" textAlign="center" variant="h2">
        Loading...
      </Typography>
      <LinearProgress
        className="loading-bar"
        variant="determinate"
        value={progress}
      />
    </Html>
  );
}

export default CustomLoader;
