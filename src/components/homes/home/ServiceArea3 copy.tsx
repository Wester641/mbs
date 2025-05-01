import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "stream_apps",
    title: "Mobile Apps",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "ads_click",
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "web",
    title: "Web Development",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "stream_apps",
    title: "Mobile Apps",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
  },
];

const ServiceArea3 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="latest-service-wrapper bg-secondary">
        <div className="container">
          <Swiper
            loop={true}
            slidesPerView={4}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".service-button-next",
              prevEl: ".service-button-prev",
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className="swiper service-swiper"
          >
            {services.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <Link to="/services">
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
                      className={`service-title ${
                        activeIndex === i ? "active" : ""
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea3;
