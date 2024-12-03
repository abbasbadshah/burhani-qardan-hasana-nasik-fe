import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Helmet } from "react-helmet";
import React from "react";
function App() {
  const getComponent = (component) => {
    return React.createElement(component, {});
  };
  return (
    <div className="App">
      <Helmet>
        <title> Burhani Qardan Hasana Nasik </title>
      </Helmet>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={`/${route.path}/`}
              element={getComponent(route.component)}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
