const Cta2Area = () => {
  return (
    <>
      <div className="cta-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-12 col-lg-6">
              <h2
                className="wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="700ms"
              >
                Let's Work Together
              </h2>
            </div>
            <div className="col-12 col-lg-6">
              <p
                className="wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="900ms"
              >
                Your idea deserves the best—let’s bring it to life together! 🚀
                Get in touch, and let’s create something amazing!
              </p>
              <a
                href="/contact"
                className="btn btn-primary wow fadeInUp"
                data-wow-duration="1000ms"
                data-wow-delay="1100ms"
              >
                <span>CONTACT US</span>
                <span>CONTACT US</span>
              </a>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default Cta2Area;
