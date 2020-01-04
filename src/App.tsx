import React, { useGlobal } from "reactn";
import "./App.css";

import Authenticated from "./Authenticated";
import Loading from "./Loading";
import Status from "./Status";
import Boot from "./Boot";
import McName from "./McName";

const App: React.FC = () => {
  const [currentUser] = useGlobal("currentUser");
  const [message] = useGlobal("message");
  const [serverStatus] = useGlobal("serverStatus");

  return (
    <div className="App">
      <h1>まいくらさーばー</h1>

      <p>まいくらサーバー mc.naari.net のコンパネ</p>

      <Loading>
        <Authenticated>
          {currentUser ? (
            <>
              <p>{currentUser.name}さんこんにちは</p>
              <h2>すてーたす</h2>
              <Status />
              <iframe
                src="https://mc.erinn.biz/intl/polling.html.php?server_addr=mc.naari3.net"
                style={{
                  width: "560px",
                  height: "60px",
                  border: "none"
                }}
              ></iframe>
              {serverStatus === "InService" ? (
                <>
                  <h2>まいくらのなまえ</h2>
                  <McName />
                </>
              ) : (
                <></>
              )}
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
