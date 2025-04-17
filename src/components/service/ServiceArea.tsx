import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: "web",
    title: "Web Development",
    description:
      "We craft high-performance, scalable, and secure websites tailored to your business needs. Whether it's a corporate website, eCommerce platform, or custom web application, our expert developers ensure a seamless user experience and cutting-edge functionality.",
  },
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description:
      "We help businesses grow online through data-driven digital marketing strategies. From SEO and paid advertising to content marketing and social media management, we ensure your brand reaches the right audience and achieves measurable success.",
  },

  {
    icon: "stream_apps",
    title: "Mobile Development",
    description:
      "Empower your business with a mobile-first approach. We build intuitive and high-performance mobile applications for iOS and Android, ensuring smooth functionality, engaging UI, and a flawless user experience. From MVPs to full-scale mobile solutions, we bring your ideas to life.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Design is more than aesthetics—it's about usability, engagement, and conversion. Our UX/UI experts create intuitive, visually striking, and user-friendly interfaces that enhance customer interactions and elevate your brand’s digital presence.",
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "We craft high-performance, scalable, and secure websites tailored to your business needs. Whether it's a corporate website, eCommerce platform, or custom web application, our expert developers ensure a seamless user experience and cutting-edge functionality.",
  },
  {
    icon: "stream_apps",
    title: "Mobile Development",
    description:
      "Empower your business with a mobile-first approach. We build intuitive and high-performance mobile applications for iOS and Android, ensuring smooth functionality, engaging UI, and a flawless user experience. From MVPs to full-scale mobile solutions, we bring your ideas to life.",
  },
];

const ServiceArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-4">
                <Link to="">
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {activeIndex === i ? "" : item.icon}
                    </span>
                    <h2
                      className={`service-title ${
                        activeIndex === i ? "active blure-style" : ""
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`service-description ${
                        activeIndex === i ? "active" : ""
                      }`}
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

export default ServiceArea;
