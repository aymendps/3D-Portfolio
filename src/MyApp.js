import { Button } from "@mui/material";
import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import App from "./App";

const Test = () => {
  return <Button>Test page</Button>;
};

const GoHome = () => {
  return <Redirect to="" />;
};

function MyApp() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/test" component={Test} />
      <Route component={GoHome} />
    </Switch>
  );
}

export default withRouter(MyApp);
