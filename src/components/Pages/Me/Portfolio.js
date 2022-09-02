import CoverPage from "./Shared/CoverPage";
import Wrapper from "./Wrapper";

function Portfolio() {
  const coverPage = <CoverPage title="My Portfolio" />;

  const pages = [coverPage];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Portfolio;
