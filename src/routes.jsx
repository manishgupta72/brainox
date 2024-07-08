import { Home, Profile, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Ai & Data",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "About",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Services",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    name: "Contact",
    href: "/contact",
    target: "_blank",
    element: "",
  },
];

export default routes;
