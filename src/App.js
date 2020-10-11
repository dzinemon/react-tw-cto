import React from "react";

import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  Router,
  Switch,
  Route
} from "react-router-dom";

import { createBrowserHistory } from "history";

import ReactGA from 'react-ga';

import Home from "./pages/Home";
import Manufacturer from "./pages/Manufacturer";
import Model from "./pages/Model"
import NotFound from "./pages/NotFound"


import Nav from "./components/Nav";
import Footer from "./components/Footer";
import FeedbackForm from "./components/FeedbackForm";

import "./App.css";

ReactGA.initialize('UA-180287299-1');
ReactGA.set({ page: window.location.pathname }); // Update the user's current page
ReactGA.pageview(window.location.pathname); // Record a pageview for the given page

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

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
