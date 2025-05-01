import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const services = [
  {
    icon: "web",
    title: "Web Development",
    description:
      "We build high-performance, scalable, secure websites tailored to your business. From corporate sites to eCommerce or custom web apps, our expert developers deliver seamless experiences and advanced functionality.",
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
      "Boost your business with mobile-first solutions. We create intuitive, high-performance iOS and Android apps with engaging UI and seamless user experience, turning your ideas into MVPs or full-scale mobile applications.",
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
      "We build high-performance, scalable, secure websites tailored to your business. From corporate sites to eCommerce or custom web apps, our expert developers deliver seamless experiences and advanced functionality.",
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
      "Boost your business with mobile-first solutions. We create intuitive, high-performance iOS and Android apps with engaging UI and seamless user experience, turning your ideas into MVPs or full-scale mobile applications.",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    description:
      "Design is more than aesthetics—it's about usability, engagement, and conversion. Our UX/UI experts create intuitive, visually striking, and user-friendly interfaces that enhance customer interactions and elevate your brand’s digital presence.",
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
                <Link to="#">
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card  ${
                      activeIndex === i ? "active " : ""
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        activeIndex === i ? "blure-style" : ""
                      }`}
                    >
                      {item.icon}
                    </span>
                    <h2
                      className={`service-title ${
                        activeIndex === i ? "blure-style blur-background" : ""
                      }`}
                    >
                      {item.title}
                    </h2>
                    <p
                      className={`service-description ${
                        activeIndex === i ? "active" : "p-3"
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
