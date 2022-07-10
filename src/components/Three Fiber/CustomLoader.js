import { Typography } from "@mui/material";
import { useProgress } from "@react-three/drei";
import { DefaultLoadingManager } from "three";

function CustomLoader() {
  const progress = useProgress((state) => state.progress);

  DefaultLoadingManager.onLoad = function () {
    console.log("complete");
  };

  return (
    <>
      <div className="absolute left-0 top-0 w-full h-full hidden flex-col justify-center items-center gap-4 ">
        <Typography
          fontFamily="'Arizonia', cursive;"
          fontWeight="bold"
          textAlign="center"
          variant="h2"
        >
          Aymen Hammami
        </Typography>
        <Typography
          fontFamily="'Arizonia', cursive;"
          fontWeight="bold"
          textAlign="center"
          variant="h2"
        >
          {Math.floor(progress) + "%"}
        </Typography>
      </div>
    </>
  );
}

export default CustomLoader;
