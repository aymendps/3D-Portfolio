import CoverPage from "./Shared/CoverPage";
import DecoratedTitle from "./Shared/DecoratedTitle";
import Wrapper from "./Wrapper";

function Portfolio() {
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
      <div className="basis-[85%] w-full flex justify-evenly items-center"></div>
    </div>
  );

  const projectsPage1 = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle title="My Projects" variant="h2" decorationSize={120} />
      </div>
      <div className="basis-[85%] w-full flex justify-evenly items-center"></div>
    </div>
  );

  const projectsPage2 = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle title="My Projects" variant="h2" decorationSize={120} />
      </div>
      <div className="basis-[85%] w-full flex justify-evenly items-center"></div>
    </div>
  );

  const pages = [coverPage, demoReelPage, projectsPage1, projectsPage2];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Portfolio;
