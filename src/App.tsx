import React, { useGlobal } from "reactn";
import "./App.css";

import Loading from "./Loading";
import Status from "./Status";
import Boot from "./Boot";

const App: React.FC = () => {
  const [currentUser] = useGlobal("currentUser");
  const [loading] = useGlobal("loading");
  return (
    <div className="App">
      <h1>まいくらさーばー</h1>
      <Loading>
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
      </Loading>
    </div>
  );
};

export default App;
