const ServiceAbout = () => {
  return (
    <>
      <div className="about-us-wrapper bg-secondary">
        <div className="divider"></div>

        <div
          className="about-left-side-bg bg-img"
          style={{ backgroundImage: `url(/assets/img/bg-img/32.jpg)` }}
        ></div>

        <div className="container">
          <div className="row g-4 justify-content-end">
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
      </div>
    </>
  );
};

export default ServiceAbout;
