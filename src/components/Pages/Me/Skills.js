import CoverPage from "./Shared/CoverPage";
import Wrapper from "./Wrapper";

function Skills() {
  const coverPage = <CoverPage title="My Skills" />;

  const pages = [coverPage];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Skills;
