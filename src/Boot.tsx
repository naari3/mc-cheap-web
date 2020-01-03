import React, { useGlobal } from "reactn";
import client from "./client";

const Boot: React.FC = () => {
  const [, setLoading] = useGlobal("loading");
  const [, setMessage] = useGlobal("message");
  const [serverStatus] = useGlobal("serverStatus");
  const [launching, setLaunching] = useGlobal("launching");

  const launchServer = async (): Promise<void> => {
    setLoading(true);
    const res = await client("/boot", {
      method: "POST"
    });
    if (res.status === 200) {
      setMessage("たちあげます、2分くらいまってて");
      setLaunching(true);
    } else {
      setMessage("失敗しました…なんで…");
    }
    setLoading(false);
  };
  return (
    <div className="Boot">
      <button
        disabled={serverStatus !== "Terminated" || launching}
        onClick={launchServer}
      >
        きどう
      </button>
    </div>
  );
};

export default Boot;
