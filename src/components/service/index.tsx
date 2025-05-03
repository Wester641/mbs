import ServiceAbout from "./ServiceAbout";
// import PriceArea from "../homes/home-2/PriceArea";
import Cta2Area from "../homes/home/Cta2Area";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import BackToTop from "../../common/BackToTop";
import { useEffect } from "react";
import ServiceArea3 from "../homes/home/ServiceArea3";
import useScrollTracking from "../../hooks/useScrollTracking";

const Service = () => {
  useScrollTracking("Scrolled 50% in Services page");

  useEffect(() => {
    document.title = "Custom Web Development Services | ExampleSoft";
  }, []);

  return (
    <>
      <HeaderOne />
      <Breacrumb title="Services" subtitle="Services" />
      <ServiceArea3 />
      <ServiceAbout />
      {/* <PriceArea style_2={true} /> */}
      <Cta2Area />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Service;
