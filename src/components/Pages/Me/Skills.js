import CoverPage from "./Shared/CoverPage";
import DecoratedTitle from "./Shared/DecoratedTitle";
import Wrapper from "./Wrapper";

function Skills() {
  const coverPage = <CoverPage title="My Skills" />;

  const techSkillsPage1 = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="Technical Skills"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[85%] w-full flex flex-wrap justify-evenly items-center"></div>
    </div>
  );

  const techSkillsPage2 = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="Technical Skills"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[85%] w-full flex flex-wrap justify-evenly items-center"></div>
    </div>
  );

  const softSkillsPage = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle title="Soft Skills" variant="h2" decorationSize={120} />
      </div>
      <div className="basis-[85%] w-full flex flex-wrap justify-evenly items-center"></div>
    </div>
  );

  const linguisticSkillsPage = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle
          title="Linguistic Skills"
          variant="h2"
          decorationSize={120}
        />
      </div>
      <div className="basis-[85%] w-full flex flex-wrap justify-evenly items-center"></div>
    </div>
  );

  const pages = [
    coverPage,
    techSkillsPage1,
    techSkillsPage2,
    softSkillsPage,
    linguisticSkillsPage,
  ];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Skills;
