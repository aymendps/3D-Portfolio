import { Typography } from "@mui/material";
import CoverPage from "./Shared/CoverPage";
import DecoratedTitle from "./Shared/DecoratedTitle";
import TechIcon from "./Shared/TechIcon";
import Wrapper from "./Wrapper";

function Skills() {
  const coverPage = <CoverPage title="My Skills" />;

  const techSkillsPage1 = (
    <div className="w-full h-full flex flex-col justify-evenly">
      <div className="w-full">
        <DecoratedTitle
          title="Programming Languages"
          variant="h4"
          decorationSize={60}
        />
        <div className="border-4 border-my-orange-brown rounded-3xl w-[75%] bg-my-orange-brown-30 flex justify-evenly m-auto pt-4 pb-2 mt-4">
          <TechIcon name={"JavaScript"} url={"/assets/images/js.png"} />
          <TechIcon name={"TypeScript"} url={"/assets/images/ts.svg"} />
          <TechIcon name={"C++"} url={"/assets/images/cpp.svg"} />
          <TechIcon name={"C#"} url={"/assets/images/c-sharp.svg"} />
          <TechIcon name={"Java"} url={"/assets/images/java.svg"} />
          <TechIcon name={"Python"} url={"/assets/images/python.svg"} />
        </div>
      </div>
      <div className="w-full">
        <DecoratedTitle
          title="Game Development"
          variant="h4"
          decorationSize={60}
        />
        <div className="border-4 border-my-orange-brown rounded-3xl w-[75%] bg-my-orange-brown-30 flex justify-evenly m-auto pt-4 pb-2 mt-4">
          <TechIcon name={"Unity"} url={"/assets/images/unity.png"} />
          <TechIcon name={"Unreal Engine"} url={"/assets/images/unreal.png"} />
          <TechIcon name={"Three.js"} url={"/assets/images/three-js.svg"} />
        </div>
      </div>
      <div className="w-full">
        <DecoratedTitle
          title="Web Development"
          variant="h4"
          decorationSize={60}
        />
        <div className="border-4 border-my-orange-brown rounded-3xl w-[75%] bg-my-orange-brown-30 flex justify-evenly m-auto pt-4 pb-2 mt-4">
          <TechIcon name={"Node.js"} url={"/assets/images/node.png"} />
          <TechIcon name={"React"} url={"/assets/images/react.png"} />
          <TechIcon name={"Express.js"} url={"/assets/images/express.svg"} />
          <TechIcon name={"MySQL"} url={"/assets/images/mysql.png"} />
          <TechIcon name={"MongoDB"} url={"/assets/images/mongo.png"} />
          <TechIcon name={"Tailwind CSS"} url={"/assets/images/tailwind.svg"} />
        </div>
      </div>
    </div>
  );

  const techSkillsPage2 = (
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <DecoratedTitle
        title="I'm familiar with"
        variant="h2"
        decorationSize={120}
      />
      <div className="w-[80%] basis-1/2 flex flex-col justify-evenly items-end">
        <div className="flex items-center w-full gap-4">
          <img alt="" src="/assets/images/dice1.svg" className="w-[75px]"></img>
          <Typography
            variant="h4"
            className="font-berkshire text-my-orange-brown text-[1.9rem]"
          >
            The software development life cycle
          </Typography>
        </div>
        <div className="flex items-center w-[90%] gap-4">
          <img alt="" src="/assets/images/dice2.svg" className="w-[75px]"></img>
          <Typography
            variant="h4"
            className="font-berkshire text-my-orange-brown text-[1.9rem]"
          >
            Unit, Integration & Functional testing
          </Typography>
        </div>
        <div className="flex items-center w-[80%] gap-4">
          <img alt="" src="/assets/images/dice3.svg" className="w-[75px]"></img>
          <Typography
            variant="h4"
            className="font-berkshire text-my-orange-brown text-[1.9rem]"
          >
            Traditional and Agile development methodologies
          </Typography>
        </div>
      </div>
    </div>
  );

  const softSkillsPage = (
    <div className="w-full h-[95%] flex flex-col justify-between items-center">
      <div className="basis-[15%]">
        <DecoratedTitle title="Soft Skills" variant="h2" decorationSize={120} />
      </div>
      <div className="basis-[85%] w-full flex justify-evenly items-center"></div>
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
      <div className="basis-[85%] w-full flex justify-evenly items-center"></div>
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
