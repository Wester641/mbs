import CtaArea from "./CtaArea";
import HeroArea from "./HeroArea";
import Cta2Area from "./Cta2Area";
// import BlogArea from "./BlogArea";
import AboutArea from "./AboutArea";
// import AwardsArea from "./AwardsArea";
import ServiceArea from "./ServiceArea";
import ProjectsArea from "./ProjectsArea";
import WorkprocessArea from "./WorkprocessArea";
import TestimonialArea from "./TestimonialArea";
// import VideoAreaHomeOne from "./VideoAreaHomeOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import BackToTop from "../../../common/BackToTop";
import OurTools from "./OurTools";
import CategoryArea from "./CategoryArea";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroArea />
      <CtaArea />
      <ServiceArea />
      <AboutArea />
      <CategoryArea />
      <ProjectsArea />
      <WorkprocessArea />
      {/* <VideoAreaHomeOne /> */}
      {/* <AwardsArea /> */}
      <TestimonialArea />
      {/* <BlogArea /> */}
      <OurTools />
      <Cta2Area />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default HomeOne;
