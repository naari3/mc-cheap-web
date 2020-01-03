import React, { useGlobal, useState } from "reactn";
import client from "./client";

import "./McName.css";

const McName: React.FC = () => {
  const [currentUser, setCurrentUser] = useGlobal("currentUser");
  const [, setMessage] = useGlobal("message");
  const [updating, setUpdating] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    setUpdating(true);
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
    setUpdating(false);
  };

  return (
    <div className="McName">
      <p>
        マイクラでつかってるユーザー名をいれてから「こうしん」をおしてください
      </p>
      <p>これによってホワリスにユーザー名が追加されるはず</p>
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
        <button disabled={updating}>こうしん</button>
      </form>
    </div>
  );
};

export default McName;
