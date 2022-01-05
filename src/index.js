import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const APP_ID = process.env.REACT_APP_MORALIS_APP_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL

ReactDOM.render(
  // <React.StrictMode>
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  <App />
  </MoralisProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
