import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./Auth";

export const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (auth.authenticate()) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
