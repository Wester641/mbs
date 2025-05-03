import BackToTop from "../../common/BackToTop";
import Breacrumb from "../../common/Breacrumb";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import Cta2Area from "../homes/home/Cta2Area";
import ContactArea from "./ContactArea";
import useScrollTracking from "../../hooks/useScrollTracking";

const Contact = () => {
  useScrollTracking("Scrolled 50% in Contact page");

  return (
    <>
      <HeaderOne />
      <Breacrumb title="Contact us" subtitle="Contact" />
      <ContactArea />
      <Cta2Area />
      <FooterOne />
      <BackToTop />
    </>
  );
};

export default Contact;
