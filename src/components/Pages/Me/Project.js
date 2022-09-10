import PinnedDiv from "./Shared/PinnedDiv";
import TechIcon from "./Shared/TechIcon";

// className = "whitespace-pre-line font-berkshire";

function Project({
  title,
  thumbnail,
  video,
  mainTech,
  otherTech,
  github,
  download,
  description,
}) {
  return (
    <PinnedDiv className="w-[30%] aspect-video shadow-xl duration-200 hover:scale-110 bg-[rgba(255,255,255,0.5)]">
      <div
        className="w-full h-full cursor-pointer bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${thumbnail})` }}
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
    </PinnedDiv>
  );
}

export default Project;
