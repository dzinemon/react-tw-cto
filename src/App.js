import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Manufacturer from "./pages/Manufacturer";
import Model from "./pages/Model"
import NoMatch from "./pages/NoMatch"


import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "./App.css";

const history = createBrowserHistory();

function App() {

  return (
    <Router history={history}>
      <Nav />
      {/* <Breadcrumbs
          manufacturer={manufacturer}
          model={model}
          designation={designation}
        /> */}

      <Switch>
        <Route exact path="/:param_manufacturer/:param_model">
          <Model />
        </Route>
        <Route exact path="/:param_manufacturer">
          <Manufacturer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route >
          <NoMatch />
        </Route>
      </Switch>
      <hr className="mt-20"></hr>
      <Footer />
    </Router>
  );
}

export default App;
