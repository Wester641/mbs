import { useParams } from "react-router-dom";
import { projectListPortfolioPage } from "../../data/project-list";

const PortfolioDetailsArea = () => {
  const { id } = useParams();

  const project = projectListPortfolioPage.find((p) => p.id === parseInt(id!));

  if (!project) return <p>Project is not defined</p>;

  return (
    <>
      <div className="portfolio-details-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-12">
              <div className="portfolio-details-content">
                <img src={project.project_details.detail_banner} alt="" />
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <div className="portfolio-details-content">
                <h2 className="display-4 fw-semibold">{project.title}</h2>

                <p>{project.project_details.detail_description}</p>

                <div className="row g-4">
                  <div className="col-6">
                    <img src={project.project_details.detail_image} alt="" />
                  </div>
                  <div className="col-6">
                    <img src={project.project_details.detail_image2} alt="" />
                  </div>
                </div>

                {/* <p>{project.project_details.detail_description}</p> */}

                {/* <p>
                  When an unknown printer took ar galley offer type year anddey
                  scrambled make aewer specimen a book bethas survived not only
                  five when anner year unknown printer eed little help from
                  friend from time to time. Although we offer the one-stop
                  convenience. unknown printer took galley type year anddey
                  scrambled. unknown printer.
                </p> */}

                <div className="d-flex gap-3 flex-column">
                  <h3>Challenge & Solution </h3>
                  {project.project_details.challenge_and_solution}
                </div>

                <div className="d-flex gap-3 flex-column">
                  <h3>Final Result</h3>
                  <p>{project.project_details.final_result}</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-4">
              <div className="portfolio-widget">
                <h4 className="mb-4">Project Information</h4>

                {/* <div className="mb-4">
                  <p className="mb-0">Client</p>
                  <h5 className="mb-0">Jessica Brown</h5>
                </div> */}

                {/* <div className="mb-4">
                  <p className="mb-0">Cost</p>
                  <h5 className="mb-0">USD 1,50,499</h5>
                </div> */}

                <div className="mb-4">
                  <p className="mb-0">Category</p>
                  <h5 className="mb-0">{project.project_details.category}</h5>
                </div>

                <div className="mb-4">
                  <p className="mb-0">Date</p>
                  <h5 className="mb-0">{project.project_details.date}</h5>
                </div>

                <div className="social-nav">
                  <a href="https://t.me/Ayryskeldi">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-telegram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 3.038a1 1 0 0 0-1.29-.957L1.5 6.5a1 1 0 0 0 .066 1.893l2.924.964 1.067 3.2a.75.75 0 0 0 1.268.293l1.64-1.641 2.933 2.2a.75.75 0 0 0 1.188-.42l2.5-10a1 1 0 0 0-.086-.658zM5.884 9.14l7.32-4.773-5.373 5.223a.75.75 0 0 0-.2.327l-.388 1.203-.86-2.58a.75.75 0 0 1 .4-.9z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/mbc.soft/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
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

export default PortfolioDetailsArea;
