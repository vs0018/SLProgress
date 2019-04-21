import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from "./registerServiceWorker";
import { Security } from '@okta/okta-react';
import App from "./App";

const config = {
  issuer: `${process.env.REACT_APP_OKTA_ORG_URL}/oauth2/default`,
  redirect_uri: window.location.origin + '/implicit/callback',
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID
}


ReactDOM.render(
  <BrowserRouter>
    <Security 
      issuer={config.issuer}
      client_id={config.client_id}
      redirect_uri={config.redirect_uri}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();

if (module.hot) module.hot.accept();