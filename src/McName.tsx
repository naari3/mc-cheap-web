import React, { useGlobal } from "reactn";
import client from "./client";

import "./McName.css";

const McName: React.FC = () => {
  const [currentUser, setCurrentUser] = useGlobal("currentUser");
  const [, setMessage] = useGlobal("message");

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    console.log({ mcUsername: currentUser.mcUsername });
    setMessage("こうしんしています…");
    const res = await client("/user", {
      method: "PUT",
      body: JSON.stringify({ mcUsername: currentUser.mcUsername })
    });
    if (res.status === 200) {
      setMessage("ユーザー名こうしんしました！！！！");
    } else if (res.status === 403) {
      setMessage("サーバーがたってるときに実行してください！！！！");
    } else {
      setMessage("ユーザー名こうしんできませんでした…伝えてください…");
    }
  };

  return (
    <div className="McName">
      <p>
        マイクラでつかってるユーザー名をいれてから「こうしん」をおしてください
      </p>
      <form onSubmit={handleSubmit}>
        @
        <input
          type="text"
          defaultValue={currentUser.mcUsername}
          size={16}
          className="McName-Input"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            currentUser.mcUsername = event.target.value;
            setCurrentUser(currentUser);
          }}
        />
        <button>こうしん</button>
      </form>
    </div>
  );
};

export default McName;
