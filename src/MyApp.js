import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import DrawerMenu from "./components/DrawerMenu";

const GoHome = () => {
  return <Redirect to="" />;
};

function MyApp() {
  return (
    <>
      <DrawerMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route component={GoHome} />
      </Switch>
    </>
  );
}

export default withRouter(MyApp);
