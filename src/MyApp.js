import React from "react";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Pages/Home";
import Portfolio from "./components/Pages/Portfolio";
import Skills from "./components/Pages/Skills";
import Contact from "./components/Pages/Contact";
import DrawerMenu from "./components/Navigation/DrawerMenu";
import About from "./components/Pages/About";
import MainCanvas from "./components/Three Fiber/MainCanvas";

const GoHome = () => {
  return <Redirect to="" />;
};

const UnderConstruction = () => {
  return (
    <p
      style={{
        position: "fixed",
        top: "0",
        left: "43%",
      }}
    >
      {"Still under construction <3"}
    </p>
  );
};

function MyApp() {
  return (
    <>
      <UnderConstruction />
      <DrawerMenu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/quest" component={MainCanvas} />
        <Route component={GoHome} />
      </Switch>
    </>
  );
}

export default withRouter(MyApp);
