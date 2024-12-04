import { FrontPage } from "./Pages/Home";
import { Login } from "./Pages/Login/Login";
import { LoginWithITS } from "./Pages/Login/Login With ITS";

export const routes = [
  {
    path: "",
    component: FrontPage,
    expect: false,
  },
  {
    path: "login",
    component: Login,
    expect: true,
  },
  {
    path: "login-with-its",
    component: LoginWithITS,
    expect: true,
  },
];
