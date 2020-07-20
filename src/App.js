import React from "react";
import { Router, Route } from "react-router-dom";

import SignIn from "./Auth/Signin";
import SignUp from "./Auth/Signup";
import Home from "./imageupload";
import { ProtectedRoute } from "./Auth/ProtectedRoute";
import history from "./History";

export default function App() {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <ProtectedRoute path="/home">
            <Home />
          </ProtectedRoute>
        </div>
      </Router>
    </div>
  );
}
