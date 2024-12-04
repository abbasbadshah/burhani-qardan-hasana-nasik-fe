import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import { Helmet } from "react-helmet";
import React from "react";
import { AuthProvider, ProtectedRoute } from "./auth";

function App() {
  const getComponent = (component, isProtected = false) => {
    const Component = component;

    if (isProtected) {
      return (
        <ProtectedRoute>{React.createElement(Component, {})}</ProtectedRoute>
      );
    }

    return React.createElement(Component, {});
  };

  return (
    <div className="App">
      <Helmet>
        <title>Burhani Qardan Hasana Nasik</title>
      </Helmet>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={`/${route.path}/`}
                element={getComponent(route.component, !route.expect)}
              />
            ))}
            <Route path="*" element={<Navigate to="/login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
