let newServiceWorker;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("service-worker.js",{scope:"music-page"})
      .then((registerEvent) => {
        registerEvent.addEventListener("updatefound", () => {
          newServiceWorker = registerEvent.installing;

          newServiceWorker.addEventListener("statechange", () => {
            /* if (newServiveWorker.state === 'installed') {

            } */

            switch (newServiceWorker.state) {
              case "installed":
                showSnackbarUpdate();
                break;
            }
          });
        });
      });
  });
}

function showSnackbarUpdate() {
  // Get the snackbar DIV
  let x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";
}

let launchUpdate = document.getElementById("launchUpdate");
launchUpdate.addEventListener("click", () => {
  newServiceWorker.postMessage({
    action: "skipWaiting",
  });
  window.reload();
});

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
