import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Spinner } from "reactstrap";

import history from "../services/history";
import { createRoutes } from "../services/createRoutes";
import { authRoutes, appRoutes } from "../routes";
import Header from "../components/Header";

const App = ({ isAuthenticated, getUser, isLoading, error, logoutUser }) => {
  const location = useLocation();
  const currentRoutes = isAuthenticated ? appRoutes : authRoutes;

  useEffect(() => {
    if (isAuthenticated) getUser();
  }, [isAuthenticated]);

  useEffect(() => {
    const matchLocation = currentRoutes.find(
      (route) => route.path === location.pathname
    );

    if (!matchLocation) history.push(currentRoutes[0].path);
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated && <Header logout={logoutUser} />}
      {isLoading ? (
        <Spinner
          className="mx-auto position-fixed"
          style={{ top: "50%", left: "50%" }}
        />
      ) : (
        createRoutes(currentRoutes)
      )}
    </>
  );
};

export default App;
