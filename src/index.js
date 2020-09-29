import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Helmet, HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
     <Helmet>
        <title>{`Вартість нових авто та повний перелік витрат при володінні`}</title>
        <meta name="description" content={`Вартість нових авто та повний перелік витрати на володіння будь-яким авто`} />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
