import { useState, useEffect, FC, lazy, Suspense } from "react";

const Marquee = lazy(() => import("react-fast-marquee"));

const PartnerArea: FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="partners-slide__2" id="catagorySlide">
      <div className="marquee3k" data-speed="1">
        <Suspense fallback={null}>
          <Marquee gradient={true} speed={150}>
            <h2 className="d-flex align-items-center mb-0">
              <div className="partners-slide ms-md-4 d-flex flex-wrap align-items-center justify-content-between">
                <img src="/assets/img/partner-img/elibay.jpg" alt="Elibay" />
                <img src="/assets/img/partner-img/ijara-logo.png" alt="Ijara" />
                <img src="/assets/img/partner-img/primex.png" alt="Primex" />
                <img src="/assets/img/partner-img/rayan.jpg" alt="Rayan" />
                <img src="/assets/img/partner-img/LOGO-UNAA.png" alt="UNAA" />
              </div>
            </h2>
          </Marquee>
        </Suspense>
      </div>
    </div>
  );
};

export default PartnerArea;
