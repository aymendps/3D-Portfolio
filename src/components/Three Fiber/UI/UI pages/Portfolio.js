import VideoPlayer from "../UI items/interfaces/VideoPlayer";
import CoverPage from "./CoverPage";
import DecoratedTitle from "../UI items/interfaces/DecoratedTitle";
import Wrapper from "./Wrapper";
import portfolioConfig from "./Portfolio.config";
import Project from "./Project";

function Portfolio({ musicVolume, setMusicVolume, setDisableMuteButton }) {
  const coverPage = <CoverPage title="My Portfolio" />;

  const demoReelPage = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="My Demo Reel"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[85%] w-full flex justify-center items-center">
        <VideoPlayer
          musicVolume={musicVolume}
          setMusicVolume={setMusicVolume}
          setDisableMuteButton={setDisableMuteButton}
          width="65%"
          url="https://www.youtube.com/"
        />
      </div>
    </div>
  );

  const getProjectPages = () => {
    let pages = [];
    const pagesNumber = Math.ceil(portfolioConfig.length / 6);
    for (let index = 0; index < pagesNumber; index++) {
      const page = (
        <div className="w-full h-[95%] flex flex-col  items-center">
          <div className="basis-[25%]">
            <DecoratedTitle
              title={`My Projects  ${index + 1} / ${pagesNumber}`}
              variant="h2"
              decorationSize={120}
            />
          </div>
          <div className="basis-[75%] w-[85%] flex flex-wrap gap-[5%] items-start">
            {portfolioConfig.slice(index * 6, index * 6 + 6).map((project) => {
              return <Project key={project.title} {...project} />;
            })}
          </div>
        </div>
      );
      pages.push(page);
    }

    return pages;
  };

  const pages = [coverPage, demoReelPage, ...getProjectPages()];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Portfolio;
