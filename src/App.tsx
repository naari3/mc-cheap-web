import React from "reactn";
import "./App.css";

import Status from "./Status";
import Boot from "./Boot";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>なありのまいくらさーばー</h1>
      <h2>すてーたす</h2>
      <Status />
      <h2>たちあげる</h2>
      <Boot />
    </div>
  );
};

export default App;
