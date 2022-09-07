import { Typography } from "@mui/material";
import { motion } from "framer-motion";
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
          <TechIcon
            name={"Unreal Engine 5"}
            url={"/assets/images/unreal.png"}
          />
          <TechIcon name={"Three.js"} url={"/assets/images/three-js.svg"} />
        </div>
      </div>
      <div className="w-full">
        <DecoratedTitle
          title="Full Stack Development"
          variant="h4"
          decorationSize={60}
        />
        <div className="border-4 border-my-orange-brown rounded-3xl w-[75%] bg-my-orange-brown-30 flex justify-evenly m-auto pt-4 pb-2 mt-4">
          <TechIcon name={"Node.js"} url={"/assets/images/node.png"} />
          <TechIcon name={"Express.js"} url={"/assets/images/express.svg"} />
          <TechIcon name={"React"} url={"/assets/images/react.png"} />
          <TechIcon name={"Tailwind CSS"} url={"/assets/images/tailwind.svg"} />
          <TechIcon name={"MySQL"} url={"/assets/images/mysql.png"} />
          <TechIcon name={"MongoDB"} url={"/assets/images/mongo.png"} />
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
          <motion.img
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 45 }}
            transition={{ repeat: Infinity }}
            alt=""
            src="/assets/images/cog.svg"
            className="w-[60px]"
          ></motion.img>
          <Typography
            variant="h4"
            className="font-berkshire text-my-orange-brown text-[1.9rem]"
          >
            SDLC: The software development life cycle
          </Typography>
        </div>
        <div className="flex items-center w-[90%] gap-4">
          <motion.img
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 45 }}
            transition={{ repeat: Infinity }}
            alt=""
            src="/assets/images/cog.svg"
            className="w-[60px]"
          ></motion.img>
          <Typography
            variant="h4"
            className="font-berkshire text-my-orange-brown text-[1.9rem]"
          >
            Unit, Integration & Functional Testing
          </Typography>
        </div>
        <div className="flex items-center w-[80%] gap-4">
          <motion.img
            initial={{ rotateZ: 0 }}
            animate={{ rotateZ: 45 }}
            transition={{ repeat: Infinity }}
            alt=""
            src="/assets/images/cog.svg"
            className="w-[60px]"
          ></motion.img>
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
    <div className="w-full h-full flex flex-col justify-evenly items-center">
      <DecoratedTitle
        title="My soft skills include"
        variant="h2"
        decorationSize={120}
      />
      <div className="basis-1/2 w-[80%] flex flex-col justify-around">
        <div className="w-full flex items-center gap-8">
          <img
            alt=""
            src="/assets/images/teamwork.svg"
            className="w-[75px]"
          ></img>
          <div>
            <Typography
              variant="h5"
              className="font-berkshire text-my-orange-brown"
            >
              Teamwork and effective communication
            </Typography>
            <Typography variant="h6" className="font-berkshire text-my-brown">
              I'm a good team player, and have experience collaborating and
              leading a team
            </Typography>
          </div>
        </div>
        <div className="w-full flex items-center gap-8">
          <img
            alt=""
            src="/assets/images/thinking.svg"
            className="w-[75px]"
          ></img>
          <div>
            <Typography
              variant="h5"
              className="font-berkshire text-my-orange-brown"
            >
              Problem solving and critical thinking
            </Typography>
            <Typography variant="h6" className="font-berkshire text-my-brown">
              I work hard to overcome complex issues and have no problems
              thinking outside the box
            </Typography>
          </div>
        </div>
        <div className="w-full flex items-center gap-8">
          <img
            alt=""
            src="/assets/images/awareness.svg"
            className="w-[75px]"
          ></img>
          <div>
            <Typography
              variant="h5"
              className="font-berkshire text-my-orange-brown"
            >
              Self-awareness and patience
            </Typography>
            <Typography variant="h6" className="font-berkshire text-my-brown">
              I am confident in my own skills, but I always take the opportunity
              to learn more and improve
            </Typography>
          </div>
        </div>
      </div>
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
      <div className="basis-[85%] w-[70%] flex flex-col justify-evenly items-center">
        <div className="w-full flex items-center justify-between">
          <div className="basis-[15%]">
            <Typography
              variant="h4"
              className="font-berkshire text-my-orange-brown"
            >
              Arabic
            </Typography>
            <Typography
              variant="h5"
              className="font-berkshire text-my-light-brown italic"
            >
              Native
            </Typography>
          </div>
          <div className="flex basis-[70%] justify-between">
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="basis-[15%]">
            <Typography
              variant="h4"
              className="font-berkshire text-my-orange-brown"
            >
              English
            </Typography>
            <Typography
              variant="h5"
              className="font-berkshire text-my-light-brown italic"
            >
              Fluent
            </Typography>
          </div>
          <div className="flex basis-[70%] justify-between">
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="basis-[15%]">
            <Typography
              variant="h4"
              className="font-berkshire text-my-orange-brown"
            >
              French
            </Typography>
            <Typography
              variant="h5"
              className="font-berkshire text-my-light-brown italic"
            >
              Proficient
            </Typography>
          </div>
          <div className="flex basis-[70%] justify-between">
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-transparent border-2 border-my-light-brown"></div>
          </div>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="basis-[15%]">
            <Typography
              variant="h4"
              className="font-berkshire text-my-orange-brown"
            >
              German
            </Typography>
            <Typography
              variant="h5"
              className="font-berkshire text-my-light-brown italic"
            >
              Intermediate
            </Typography>
          </div>
          <div className="flex basis-[70%] justify-between">
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-my-brown border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-transparent border-2 border-my-light-brown"></div>
            <div className="w-[30px] aspect-square rounded-[50%] bg-transparent border-2 border-my-light-brown"></div>
          </div>
        </div>
      </div>
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
