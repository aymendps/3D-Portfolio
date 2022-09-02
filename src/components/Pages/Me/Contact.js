import CoverPage from "./Shared/CoverPage";
import Wrapper from "./Wrapper";

function Contact() {
  const coverPage = <CoverPage title="Contact me" />;

  const pages = [coverPage];
  return <Wrapper pages={pages}></Wrapper>;
}

export default Contact;
