import React from "react";

import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";

import Home from "./pages/Home";
import Manufacturer from "./pages/Manufacturer";
import Model from "./pages/Model"
import NotFound from "./pages/NotFound"


import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";

import "./App.css";

const history = createBrowserHistory();

function App() {

  return (
    <Router history={history}>
      <HelmetProvider>
      <Helmet>
        <title>{`Вартість нових авто та повний перелік витрат при володінні`}</title>
        <meta name="description" content={`Вартість нових авто та повний перелік витрати на володіння будь-яким авто`} />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <hr className="mt-20"></hr>
        <FeedbackForm />
        <Footer />
      </HelmetProvider>
    </Router>
  );
}

export default App;
