const CtaArea = () => {
  return (
    <>
      <div
        className="cta-wrap jarallax"
        data-jarallax=""
        data-speed="0.6"
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(/assets/img/bg-img/1.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-11 col-md-10 col-lg-7 col-xl-6 col-xxl-5">
              <div className="cta-card">
                <div className="total-clients-wrap">
                  <div className="total-number">
                    <h3>50+</h3>
                    <p className="mb-0">Satisfied Customers</p>
                  </div>

                  <div className="clients-images">
                    <img src="/assets/img/partner-img/1.png" alt="" />
                    <img src="/assets/img/partner-img/1.png" alt="" />
                    <img src="/assets/img/partner-img/1.png" alt="" />
                    <img src="/assets/img/partner-img/1.png" alt="" />
                  </div>
                </div>

                <div className="cta-stats">
                  <div>
                    <h2>30+</h2>
                    <p className="mb-0">Global Clients</p>
                  </div>

                  <div>
                    <h2>13+</h2>
                    <p className="mb-0">Team members</p>
                  </div>

                  <div>
                    <h2>3+</h2>
                    <p className="mb-0">Team experiance</p>
                  </div>

                  <div>
                    <h2>60+</h2>
                    <p className="mb-0">Project completed</p>
                  </div>
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

export default CtaArea;
