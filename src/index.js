import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain="dev-tq051e4xjabx1zmn.us.auth0.com"
  clientId="FTIKWSbquStN8GS1RhcxF1N6FGIz6y4s"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <App />
    <ToastContainer/>
  </Auth0Provider>  
);


