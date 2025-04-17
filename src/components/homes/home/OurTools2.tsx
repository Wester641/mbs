import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description: "Designed user interface contributes",
  },
  {
    icon: "web",
    title: "Web Development",
    description: "Designed user interface contributes",
  },
  {
    icon: "stream_apps",
    title: "Mobile Apps",
    description: "Designed user interface contributes",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description: "Designed user interface contributes",
  },
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description: "Designed user interface contributes",
  },
  {
    icon: "web",
    title: "Web Development",
    description: "Designed user interface contributes",
  },
];

const OurTools = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-2">
                <Link to="">
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {item.icon}
                    </span>
                    <h2
                      style={{ bottom: `${activeIndex === i ? "140px" : ""}` }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-0"
                      style={{ bottom: `${activeIndex === i ? "45px" : ""}` }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
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
