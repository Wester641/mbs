const AboutArea = () => {
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
                  <a href="#" className="btn btn-primary mt-1">
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
                <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                  <img src="/assets/img/partner-img/1.png" alt="" />
                  <img src="/assets/img/partner-img/1.png" alt="" />
                  <img src="/assets/img/partner-img/1.png" alt="" />
                  <img src="/assets/img/partner-img/1.png" alt="" />

                  {/* <img src="/assets/img/partner-img/3.png" alt="" />
                  <img src="/assets/img/partner-img/5.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default AboutArea;
