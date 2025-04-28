const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "FAQ",
    link: "/faq",
    has_dropdown: false,
    sub_menus: [
      {
        link: "/about-us",
        title: "About Us",
        has_inner_dropdown: false,
      },
      // {
      //   link: "#",
      //   title: "Service",
      //   has_inner_dropdown: true,
      //   inner_submenu: [
      //     { link: "/services", title: "Service" },
      //     { link: "", title: "Service Details" },
      //   ],
      // },
      // {
      //   link: "#",
      //   title: "Authentification",
      //   has_inner_dropdown: true,
      //   inner_submenu: [
      //     { link: "/register", title: "Register" },
      //     { link: "/login", title: "Login" },
      //   ],
      // },
      // {
      //   link: "/pricing-plan",
      //   title: "Pricing Plan",
      //   has_inner_dropdown: false,
      // },
      // {
      //   link: "/faq",
      //   title: "FAQ",
      //   has_inner_dropdown: false,
      // },
      // {
      //   link: "/team",
      //   title: "Team",
      //   has_inner_dropdown: false,
      // },
      // {
      //   link: "/team-details",
      //   title: "Team Details",
      //   has_inner_dropdown: false,
      // },
      // {
      //   link: "/404",
      //   title: "404 - Error",
      //   has_inner_dropdown: false,
      // },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
    // sub_menus: [
    //   { link: "/portfolio", title: "Portfolio" },
    //   { link: "/portfolio-details", title: "Portfolio Details" },
    // ],
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
    has_dropdown: false,
    // sub_menus: [
    //   { link: "/services", title: "Service" },
    //   { link: "", title: "Service Details" },
    //   { link: "/contact", title: "Contact" },
    // ],
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
    // sub_menus: [
    //   { link: "/services", title: "Service" },
    //   { link: "", title: "Service Details" },
    //   { link: "/contact", title: "Contact" },
    // ],
  },
];

export default menu_data;
