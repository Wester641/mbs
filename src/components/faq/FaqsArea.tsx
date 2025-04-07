import { useEffect } from "react";

const FaqsArea = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);

  return (
    <>
      <div className="faq-page-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="faq-accordion service-details-faq">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion1"
                        aria-expanded="true"
                        aria-controls="faqQuestion1"
                      >
                        How much does it cost to develop a website or app?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion1"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        The cost depends on the complexity, features, and
                        timeline of your project. We offer flexible pricing and
                        provide a free consultation to estimate your budget
                        accurately.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion2"
                        aria-expanded="false"
                        aria-controls="faqQuestion2"
                      >
                        How long does development take?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion2"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Project timelines vary based on requirements. A simple
                        website can take a few weeks, while complex apps may
                        take months. We set clear deadlines and keep you updated
                        throughout the process.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion3"
                        aria-expanded="false"
                        aria-controls="faqQuestion3"
                      >
                        Will my website or app be mobile-friendly?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion3"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Absolutely! We design and develop all our products to be
                        fully responsive and optimized for all
                        devices—smartphones, tablets, and desktops.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion4"
                        aria-expanded="false"
                        aria-controls="faqQuestion4"
                      >
                        What technologies do you use?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion4"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We work with modern and proven technologies like React,
                        Node.js, Laravel, Flutter, and many others to ensure
                        security, scalability, and top performance.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion5"
                        aria-expanded="false"
                        aria-controls="faqQuestion5"
                      >
                        Can you redesign my existing website or app?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion5"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes! We can revamp your current digital product to
                        improve its design, speed, and functionality, making it
                        more modern and user-friendly.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion6"
                        aria-expanded="false"
                        aria-controls="faqQuestion6"
                      >
                        Will I be involved in the development process?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion6"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Of course! We maintain open communication, provide
                        regular updates, and ensure your feedback is integrated
                        at every stage.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion7"
                        aria-expanded="false"
                        aria-controls="faqQuestion7"
                      >
                        Do you provide support after the project is completed?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion7"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we offer ongoing technical support, maintenance,
                        and updates to ensure your product runs smoothly and
                        stays up to date.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion8"
                        aria-expanded="false"
                        aria-controls="faqQuestion8"
                      >
                        Can you help with SEO and digital marketing?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion8"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Definitely! We provide SEO optimization, digital
                        advertising, and marketing strategies to help your
                        business grow online and attract more customers.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion9"
                        aria-expanded="false"
                        aria-controls="faqQuestion9"
                      >
                        What if I don’t have a clear idea of what I need?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion9"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        No problem! Our team will guide you through the process,
                        help define your goals, and suggest the best solutions
                        based on your business needs.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqQuestion10"
                        aria-expanded="false"
                        aria-controls="faqQuestion10"
                      >
                        How do you ensure my project is secure?
                      </button>
                    </h2>
                    <div
                      id="faqQuestion10"
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We implement the latest security standards, including
                        encryption, secure authentication, and regular audits to
                        protect your data and users.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="section-heading text-center">
                <h2>Still have questions?</h2>
                <p>
                  You can use it in situations when you are providing guidance
                  With over a decade of experienceor information.
                </p>
                <a href="/contact" className="btn btn-primary mt-5">
                  <span>CONTACT</span>
                  <span>CONTACT</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default FaqsArea;
