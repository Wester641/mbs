import Dodecahedron from "../../../common/dodehodron/Dodecahedron";

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper mil-banner-personal">
        <div className="divider"></div>
        <div className="container">
          <Dodecahedron />

          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <h2
                  className="mb-0 wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="500ms"
                >
                  Custom IT Solutions
                </h2>
                <h2
                  className="mb-0 d-md-flex align-items-center wow fadeInUp"
                  data-wow-duration="1000ms"
                  data-wow-delay="800ms"
                >
                  & Web Development
                  <span
                    className="hero-subtitle mt-3 wow fadeInUp"
                    data-wow-duration="1000ms"
                    data-wow-delay="1000ms"
                  >
                    MBC Soft is a global IT company specializing in web
                    development, UI/UX design, and tailored digital solutions
                    for businesses. We help companies worldwide build modern,
                    high-performance websites and IT systems. Let’s turn your
                    ideas into reality!
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
      </section>
    </>
  );
};

export default HeroArea;
