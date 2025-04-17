import { useState } from "react";
import { stack } from "../../../data/stack";

const OurTools = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <h2
          className="wow fadeInUp"
          data-wow-duration="1000ms"
          data-wow-delay="700ms"
        >
          Our tools
        </h2>
        <div className="divider"></div>
        <div className="container">
          <div className="row g-1 g-lg-1">
            {stack.map((item, i) => (
              <div key={item.id} className="col-1 col-md-1 col-xl-1">
                <div
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`our-tools ${activeIndex === i ? "active" : ""}`}
                >
                  <img src={item.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </>
  );
};

export default OurTools;
