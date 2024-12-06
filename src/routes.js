import { Error404 } from "./Pages/404 Error";
import { JamaatLogin } from "./Pages/Auth/Login/Jamaat Login";
import { LoginWithITS } from "./Pages/Auth/Login/Login With ITS";
import { UserInstallment } from "./Pages/Dashboard/User/Installments";
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
  {
    path: "request-qardan-hasana",
    component: RequestQardanHasana,
    expect: false,
  },
  {
    path: "installment",
    component: UserInstallment,
    expect: false,
  },
  {
    path: "404-error",
    component: Error404,
    expect: false,
  },
];
