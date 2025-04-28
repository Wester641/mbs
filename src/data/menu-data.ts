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
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Services",
    link: "/services",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
    has_dropdown: false,
  },
];

export default menu_data;
