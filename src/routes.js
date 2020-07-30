import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./pages/HomePage")),
    private: true,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./pages/RegisterPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./pages/LoginPage")),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Tasks",
    exact: true,
    component: lazy(() => import("./pages/ContactsPage")),
    private: true,
    restricted: false,
  },
];
