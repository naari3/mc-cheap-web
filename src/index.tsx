import React, { setGlobal } from "reactn";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { UserType } from "./types/userType";

import addReactNDevTools from "reactn-devtools";

if (process.env.NODE_ENV !== "production") {
  addReactNDevTools();
}

setGlobal({ loading: true });

(async (): Promise<void> => {
  const req = await fetch(`${process.env.REACT_APP_API_HOST}/user`, {
    credentials: "include",
    mode: "cors"
  });
  let user!: UserType;
  if (req.status === 200) {
    const json = await req.json();
    user = json.user as UserType;
  }
  setGlobal({ currentUser: user, loading: false });
})();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
