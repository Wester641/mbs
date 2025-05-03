import { useEffect } from "react";
import BackToTop from "../../common/BackToTop";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Cta2Area from "../homes/home/Cta2Area";
import PortfolioArea from "./PortfolioArea";
import useScrollTracking from "../../hooks/useScrollTracking";

const Portfolio = () => {
  useScrollTracking("Scrolled 50% in Faq page");

  useEffect(() => {
    document.title = "Web & Mobile Development Portfolio | MBC Soft";
  }, []);

  return (
    <>
      <HeaderOne />
      <Breacrumb title="Portfolio" subtitle="Portfolio" />
      <PortfolioArea />
      <Cta2Area />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Portfolio;
