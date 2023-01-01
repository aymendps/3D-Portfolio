import { IconButton, Typography } from "@mui/material";
import PinnedDiv from "../UI items/interfaces/PinnedDiv";
import TechIcon from "../UI items/interfaces/TechIcon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import VideoPlayer from "../UI items/interfaces/VideoPlayer";
import { useState } from "react";
import GithubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";
import CollectionsIcon from "@mui/icons-material/Collections";
import DecoratedTitle from "../UI items/interfaces/DecoratedTitle";
import WebsiteIcon from "@mui/icons-material/Language";

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
  website,
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
        className={`bg-cover bg-center bg-no-repeat basis-1/5 rounded cursor-pointer duration-200 h-full bg-my-orange-brown-30 ${
          selectedMedia === index
            ? "border-my-orange-brown border-4"
            : "border-my-light-brown border-2"
        }`}
      ></div>
    );
  });

  const links = [
    {
      link: website,
      icon: <WebsiteIcon fontSize="large" className=" text-my-brown" />,
    },
    {
      link: download,
      icon: <DownloadIcon fontSize="large" className=" text-my-brown" />,
    },
    {
      link: github,
      icon: <GithubIcon fontSize="large" className=" text-my-brown" />,
    },
    {
      link: moreScreenshots,
      icon: <CollectionsIcon fontSize="large" className=" text-my-brown" />,
    },
  ];

  const generateLinks = links.map((l, index) => {
    return (
      l.link && (
        <a
          key={l.link + index}
          target="_blank"
          rel="noreferrer"
          href={l.link}
          className=" bg-my-light-brown rounded-[50%] bg-opacity-50 p-2"
        >
          {l.icon}
        </a>
      )
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
    <div className="flex flex-col w-full h-full">
      <div className="flex items-center gap-8 w-full basis-[15%] overflow-hidden">
        <div className="flex items-center gap-2">
          <IconButton size="small" disableRipple onClick={onClick}>
            <ArrowBackIcon className="text-my-brown text-4xl" />
          </IconButton>
          <Typography variant="h4" className="font-berkshire text-my-brown">
            {title}
          </Typography>
        </div>
        <div className="flex items-center gap-8 bg-my-light-brown px-5 py-3 rounded-3xl bg-opacity-50">
          {[...mainTech, ...otherTech].map((tech, index) => {
            return (
              <TechIcon key={index + "tech" + tech} url={tech} imgWidth={40} />
            );
          })}
        </div>
      </div>
      <div className="w-full basis-[67%] flex overflow-hidden">
        <div className="basis-[70%] p-2 flex justify-center">
          <div className="w-[90%] oldpc:w-[98%]">
            {selectedMedia === 0 ? (
              <VideoPlayer
                musicVolume={musicVolume}
                setMusicVolume={setMusicVolume}
                setDisableMuteButton={setDisableMuteButton}
                width="100%"
                height="100%"
                url={video}
                aspectVideo={false}
              />
            ) : (
              <div
                style={{
                  backgroundImage: `url(${images[selectedMedia - 1] || ""})`,
                }}
                className="w-full aspect-video border-2 border-my-brown bg-my-light-brown bg-opacity-50 bg-contain bg-center bg-no-repeat"
              ></div>
            )}
          </div>
        </div>
        <div className="basis-[30%] pb-4 pr-8 flex flex-col oldpc:pl-4">
          <div className="h-[10%]">
            <DecoratedTitle
              title="Description"
              variant="h5"
              decorationSize={80}
            />
          </div>
          <div className="h-[90%] overflow-hidden">
            <Typography className="font-berkshire text-black whitespace-pre-line oldpc:text-[0.9rem]">
              {description}
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full basis-[2%] overflow-hidden"></div>
      <div className="w-full basis-[16%] flex">
        <div className="basis-[70%] flex justify-center">
          <div className="w-[90%] h-[88%] flex items-center justify-between px-2 oldpc:w-[98%]">
            {swapMedia}
          </div>
        </div>
        <div className="basis-[30%] py-4 pr-8 flex flex-col justify-center items-center oldpc:pl-4">
          {(github || website || download || moreScreenshots) && (
            <div className="translate-y-[-50%]">
              <DecoratedTitle
                title="See More"
                variant="h5"
                decorationSize={80}
              />
            </div>
          )}
          <div className="flex w-[70%] gap-4 justify-center">
            {generateLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
