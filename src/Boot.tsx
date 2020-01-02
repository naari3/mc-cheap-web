import React, { useGlobal } from "reactn";

const Boot: React.FC = () => {
  const [, setLoading] = useGlobal("loading");
  const [, setMessage] = useGlobal("message");
  const launchServer = async (): Promise<void> => {
    setLoading(true);
    const req = await fetch(`${process.env.REACT_APP_API_HOST}/boot`, {
      method: "POST",
      credentials: "include",
      mode: "cors"
    });
    if (req.status === 200) {
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
