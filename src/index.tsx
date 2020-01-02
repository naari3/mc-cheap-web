import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import client from "./client";

import { UserType } from "./types/userType";

import addReactNDevTools from "reactn-devtools";

if (process.env.NODE_ENV !== "production") {
  addReactNDevTools();
}

setGlobal({ loading: true });

(async (): Promise<void> => {
  let user!: UserType;

  const res = await client("/user");
  if (res.status === 200) {
    const json = await res.json();
    user = json.user as UserType;
  }

  setGlobal({
    currentUser: user || null,
    loading: false,
    serverStatus: "Terminated"
  });
})();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
