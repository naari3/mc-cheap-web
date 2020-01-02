import React, { useGlobal } from "reactn";
import client from "./client";

const Boot: React.FC = () => {
  const [, setLoading] = useGlobal("loading");
  const [, setMessage] = useGlobal("message");
  const launchServer = async (): Promise<void> => {
    setLoading(true);
    const res = await client("/boot", {
      method: "POST"
    });
    if (res.status === 200) {
      setMessage("たちあがりました");
    } else {
      setMessage("失敗しました…なんで…");
    }
    setLoading(false);
  };
  return (
    <div className="Boot">
      <button onClick={launchServer}>きどう</button>
    </div>
  );
};

export default Boot;
