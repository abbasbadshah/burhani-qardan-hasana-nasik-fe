import { JamaatLogin } from "./Pages/Auth/Login/Jamaat Login";
import { LoginWithITS } from "./Pages/Auth/Login/Login With ITS";
import { RequestQardanHasana } from "./Pages/Dashboard/User/Request Qardan Hasana";
import { FrontPage } from "./Pages/Home";

export const routes = [
  {
    path: "",
    component: FrontPage,
    expect: false,
  },
  {
    path: "login",
    component: JamaatLogin,
    expect: true,
  },
  {
    path: "login-with-its",
    component: LoginWithITS,
    expect: true,
  },
  ,
  {
    path: "request-qardan-hasana",
    component: RequestQardanHasana,
    expect: false,
  },
];
