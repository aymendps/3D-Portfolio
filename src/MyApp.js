import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import DrawerMenu from "./components/DrawerMenu";
import Home from "./components/Home";

const GoHome = () => {
  return <Redirect to="" />;
};

function MyApp() {
  return (
    <>
      <DrawerMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/skills" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route component={GoHome} />
      </Switch>
    </>
  );
}

export default withRouter(MyApp);
