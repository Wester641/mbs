import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/homes/home";
import Aboutus from "./components/about-us";
import Service from "./components/service";
import Faq from "./components/faq";
import Portfolio from "./components/portfolio";
import PortfolioDetails from "./components/portfolio-details";
import Contact from "./components/contact";
import ErrorArea from "./components/error";
import PortfolioDetailsArea from "./components/portfolio-details/PortfolioDetailsArea";

import useScrollTracking from "./hooks/useScrollTracking";

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  // { path: "/home-2", element: <HomeTwo /> },
  { path: "/about-us", element: <Aboutus /> },
  { path: "/services", element: <Service /> },
  { path: "/faq", element: <Faq /> },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/portfolio-details", element: <PortfolioDetails /> },
  { path: "/contact", element: <Contact /> },
  { path: "/portfolio/:id", element: <PortfolioDetailsArea /> },
  { path: "*", element: <ErrorArea /> },
]);

function App() {
  useScrollTracking("Scrolled 50% in Home page");

  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

export default App;
