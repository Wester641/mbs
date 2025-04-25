import { Canvas } from "@react-three/fiber";
import RotatingDodecahedron from "../../../common/dodehodron/Dodecahedron";

const HeroArea = () => {
  return (
    <>
      <section className="hero-wrapper mil-banner-personal">
        <div className="divider"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="hero-content">
                <div className="canvas-dodecahedron">
                  <Canvas
                    style={{
                      height: "1200px",
                      width: "1200px",
                      background: "inherit",
                    }}
                  >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingDodecahedron />
                  </Canvas>
                </div>
                <div className="canvas-dodecahedron2">
                  <Canvas
                    style={{
                      height: "500px",
                      width: "500px",
                      background: "inherit",
                    }}
                  >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingDodecahedron />
                  </Canvas>
                </div>
                <div className="canvas-dodecahedron3">
                  <Canvas
                    style={{
                      height: "300px",
                      width: "300px",
                      background: "inherit",
                    }}
                  >
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <RotatingDodecahedron />
                  </Canvas>
                </div>
                <section className="banner-text">
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
                </section>
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
