import React, { useGlobal } from "reactn";
import "./App.css";

import Authenticated from "./Authenticated";
import Loading from "./Loading";
import Status from "./Status";
import Boot from "./Boot";

const App: React.FC = () => {
  const [currentUser] = useGlobal("currentUser");
  const [message] = useGlobal("message");

  return (
    <div className="App">
      <h1>まいくらさーばー</h1>

      <Loading>
        <Authenticated>
          {currentUser ? (
            <>
              <p>{currentUser.name}さんこんにちは</p>
              <h2>すてーたす</h2>
              <Status />
              <h2>たちあげる</h2>
              <Boot />
            </>
          ) : (
            <>
              <p>
                <a href={`${process.env.REACT_APP_API_HOST}/auth/twitter`}>
                  ログインしてください
                </a>
              </p>
            </>
          )}
        </Authenticated>
        <p>{message}</p>
      </Loading>
    </div>
  );
};

export default App;
