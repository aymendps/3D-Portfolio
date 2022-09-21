import { Button, IconButton, Typography } from "@mui/material";
import PinnedDiv from "../UI items/interfaces/PinnedDiv";
import TechIcon from "../UI items/interfaces/TechIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoPlayer from "../UI items/interfaces/VideoPlayer";
import { useState } from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import CollectionsIcon from "@mui/icons-material/Collections";

// className = "whitespace-pre-line font-berkshire";

function Project({
  title,
  tag,
  thumbnail,
  video,
  images,
  mainTech,
  otherTech,
  github,
  download,
  moreScreenshots,
  description,
  onClick,
  isPreview,
  musicVolume,
  setMusicVolume,
  setDisableMuteButton,
}) {
  const [selectedMedia, setSelectedMedia] = useState(0);

  const swapMedia = [thumbnail, ...images].map((media, index) => {
    return (
      <div
        key={media + "-swap-button"}
        onClick={() => {
          setSelectedMedia(index);
        }}
        style={{
          backgroundImage: `url(${media})`,
        }}
        className={`aspect-video bg-cover bg-center bg-no-repeat basis-1/5 cursor-pointer duration-200 h-full bg-my-orange-brown-30 ${
          selectedMedia === index
            ? "border-my-brown border-4"
            : "border-my-light-brown border-2"
        }`}
      ></div>
    );
  });

  return isPreview ? (
    <PinnedDiv className="w-[30%] aspect-video shadow-xl duration-200 hover:scale-110 bg-[rgba(255,255,255,0.5)]">
      <div
        className="w-full h-full cursor-pointer bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={onClick}
      ></div>
      <div className="absolute w-[15%] h-full top-0 left-0 pointer-events-none flex flex-col justify-center gap-[5%] bg-[rgba(255,255,255,0.5)]">
        {mainTech.map((tech, index) => {
          return (
            <TechIcon
              key={title + "tech" + index}
              className="w-full"
              imgWidth="60%"
              url={tech}
            />
          );
        })}
      </div>
      <div className="absolute left-0 bottom-[-15%]">
        <Typography className="font-berkshire text-my-brown">
          <span className="text-red-700">{tag}</span>
          {title}
        </Typography>
      </div>
    </PinnedDiv>
  ) : (
    <div className="flex flex-col w-full h-full px-4">
      <div className="flex items-center gap-8 w-full basis-[15%]">
        <IconButton
          size="small"
          disableRipple
          className="border-2 border-my-brown border-solid"
          onClick={onClick}
        >
          <ArrowBackIcon className="text-my-brown text-4xl" />
        </IconButton>
        <Typography
          variant="h4"
          className="font-berkshire text-my-brown text-[2rem]"
        >
          {title}
        </Typography>
        {[...mainTech, ...otherTech].map((tech, index) => {
          return <TechIcon key={index + "tech" + tech} url={tech} />;
        })}
      </div>
      <div className="w-full flex basis-[85%]">
        <div className="w-full flex items-center">
          <div className="basis-3/4 2xl:basis-2/3 flex flex-col justify-center">
            <div className="w-full flex flex-col gap-[5%] justify-center">
              <div className="w-[95%]">
                {selectedMedia === 0 ? (
                  <VideoPlayer
                    musicVolume={musicVolume}
                    setMusicVolume={setMusicVolume}
                    setDisableMuteButton={setDisableMuteButton}
                    width="100%"
                    url={video}
                  />
                ) : (
                  <div
                    style={{
                      backgroundImage: `url(${
                        images[selectedMedia - 1] || ""
                      })`,
                    }}
                    className="w-full aspect-video border-2 border-my-orange-brown bg-my-orange-brown-30 bg-contain bg-center bg-no-repeat"
                  ></div>
                )}
              </div>
              <div className="w-[95%] flex justify-between">{swapMedia}</div>
            </div>
          </div>
          <div className="basis-1/4 2xl:basis-1/3 flex flex-col h-[94%] 2xl:h-full">
            <Typography className="font-berkshire basis-[82%] flex-shrink-0 overflow-hidden text-my-brown whitespace-pre-line text-[0.94rem] 2xl:text-[1.1rem]">
              {description}
            </Typography>
            <div className="basis-[18%] flex flex-col justify-center gap-2">
              {github && (
                <Button
                  fullWidth
                  startIcon={<GithubIcon />}
                  disableRipple
                  variant="contained"
                  className="normal-case font-berkshire bg-my-orange-brown hover:bg-red-700 text-[0.75rem] 2xl:text-[0.875rem]"
                  onClick={() => {
                    window.open(github, "_blank");
                  }}
                >
                  Open Repository
                </Button>
              )}
              <div className="flex flex-col 2xl:flex-row justify-between w-full gap-2">
                {download && (
                  <Button
                    startIcon={<DownloadIcon />}
                    disableRipple
                    variant="contained"
                    className="normal-case font-berkshire bg-my-orange-brown basis-[48%] flex-grow hover:bg-red-700 text-[0.75rem] 2xl:text-[0.875rem]"
                    onClick={() => {
                      window.open(download, "_blank");
                    }}
                  >
                    Download Demo
                  </Button>
                )}
                {moreScreenshots && (
                  <Button
                    startIcon={<CollectionsIcon />}
                    disableRipple
                    variant="contained"
                    className="normal-case font-berkshire bg-my-orange-brown basis-[48%] flex-grow hover:bg-red-700 text-[0.75rem] 2xl:text-[0.875rem]"
                    onClick={() => {
                      window.open(moreScreenshots, "_blank");
                    }}
                  >
                    More Screenshots
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
