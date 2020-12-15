import { Route, Switch } from "react-router-dom";
import React from "react";

export const createRoutes = (routes) => {
  return (
    <Switch>
      {routes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
  );
};
