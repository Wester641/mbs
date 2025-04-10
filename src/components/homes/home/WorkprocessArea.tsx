const WorkprocessArea = () => {
  return (
    <>
      <div className="work-process-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-5">
            <div className="col-md-5 col-xl-6">
              <div className="section-heading">
                <h2 className="mb-4">How We Work</h2>
                <p className="mb-5">
                  From Idea to Reality – Our Process We turn your vision into a
                  powerful digital solution. Our structured and transparent
                  workflow ensures efficiency, quality, and a seamless
                  experience from start to finish.
                </p>
                <a href="/faq" className="btn btn-primary">
                  <span>READ MORE</span>
                  <span>READ MORE</span>
                </a>
              </div>
            </div>

            <div className="col-md-7 col-xl-6">
              <div className="work-process">
                <div className="process-card">
                  <div className="number">1</div>
                  <div className="process-text">
                    <h4>Research & Discovery</h4>
                    <p className="mb-0">
                      We start by understanding your business, target audience,
                      and goals. Through in-depth research and analysis, we
                      gather key insights to create a strategy tailored to your
                      needs.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">2</div>
                  <div className="process-text">
                    <h4>UX/UI Design & Prototyping</h4>
                    <p className="mb-0">
                      Our design team crafts intuitive, user-friendly, and
                      visually appealing interfaces. We provide prototypes for
                      review and work closely with you to refine the design
                      before development begins.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">3</div>
                  <div className="process-text">
                    <h4>Development & Implementation</h4>
                    <p className="mb-0">
                      Using modern technologies and best coding practices, our
                      developers bring the design to life, ensuring scalability,
                      security, and high performance.
                    </p>
                  </div>
                </div>

                <div className="process-card">
                  <div className="number">4</div>
                  <div className="process-text">
                    <h4>Testing & Quality Assurance</h4>
                    <p className="mb-0">
                      Before launch, we conduct rigorous testing to identify and
                      fix any bugs, optimize performance, and ensure a flawless
                      user experience across all devices and browsers.
                    </p>
                  </div>
                </div>
                <div className="process-card">
                  <div className="number">5</div>
                  <div className="process-text">
                    <h4>Deployment & Ongoing Support</h4>
                    <p className="mb-0">
                      Once everything is perfect, we launch your project. But
                      our work doesn’t stop there—we provide continuous
                      technical support, updates, and maintenance to keep your
                      product running smoothly.
                    </p>
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

export default WorkprocessArea;
