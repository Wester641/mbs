import CtaArea from "./CtaArea";
import HeroArea from "./HeroArea";
import Cta2Area from "./Cta2Area";
import AboutArea from "./AboutArea";

import ProjectsArea from "./ProjectsArea";
import WorkprocessArea from "./WorkprocessArea";
import TestimonialArea from "./TestimonialArea";

import HeaderOne from "../../../layouts/headers/HeaderOne";
import FooterOne from "../../../layouts/footers/FooterOne";
import BackToTop from "../../../common/BackToTop";
import OurTools from "./OurTools";
import CategoryArea from "./CategoryArea";
import ProcessArea from "../home-2/ProcessArea";
import ServiceArea3 from "./ServiceArea3";

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <HeroArea />
      <CtaArea />
      <ServiceArea3 />
      <AboutArea />
      <CategoryArea />
      <ProjectsArea />
      <ProcessArea />
      <WorkprocessArea />
      <TestimonialArea />
      <OurTools />
      <Cta2Area />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default HomeOne;
