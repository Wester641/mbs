import { useState, useEffect, FC, lazy, Suspense } from "react";
const Marquee = lazy(() => import("react-fast-marquee"));

const AboutArea: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div className="about-us-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="about-us-thumbnail">
                <img src="/assets/img/bg-img/6.jpg" alt="" />

                <div className="top-content">
                  <h6 className="mb-0">Trusted by 50+ Clients Worldwide</h6>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="about-us-text-content ps-md-4">
                <div className="section-heading">
                  <h2 className="mb-0">Passionate About Quality Design</h2>
                </div>
                <p className="mb-0">
                  MBC Soft is a global IT company specializing in web and mobile
                  development, UX/UI design, and digital marketing. We create
                  cutting-edge solutions that help businesses grow and succeed
                  in the digital world. With a focus on quality, innovation, and
                  user experience, we deliver products that make an impact.
                </p>

                <div>
                  <a href="/faq" className="btn btn-primary mt-1">
                    <span>MORE ABOUT US</span>
                    <span>MORE ABOUT US</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="our-partners-wrapper">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-3">
                <h4 className="mb-0">
                  Trusted by <span className="text-primary">50+ </span>
                  Clients Worldwide
                </h4>
              </div>
              <div className="col-12 col-md-9">
                <div className="partners-slide__2 " id="catagorySlide">
                  <div className="marquee3k" data-speed="1">
                    <Suspense fallback={null}>
                      <Marquee gradient={false} speed={50}>
                        <h2 className="d-flex align-items-center mb-0">
                          <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                            <img
                              src="/assets/img/partner-img/elibay.jpg"
                              alt="Elibay"
                            />
                            <img
                              src="/assets/img/partner-img/ijara-logo.png"
                              alt="Ijara"
                            />
                            <img
                              src="/assets/img/partner-img/primex.png"
                              alt="Primex"
                            />
                            <img
                              src="/assets/img/partner-img/rayan.jpg"
                              alt="Rayan"
                            />
                            <img
                              className="scroll-end"
                              src="/assets/img/partner-img/LOGO-UNAA.png"
                              alt="UNAA"
                            />
                          </div>
                        </h2>
                      </Marquee>
                    </Suspense>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;
