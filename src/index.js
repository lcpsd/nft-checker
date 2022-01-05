import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MoralisProvider } from "react-moralis";

const APP_ID = "Z5GwmH1MgjdT8McD8Rv7I3F9Sb5ROjX4TsNrUD82"
const SERVER_URL = "https://qzihuhp2fv72.usemoralis.com:2053/server"

ReactDOM.render(
  // <React.StrictMode>
  <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
  <App />
  </MoralisProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
