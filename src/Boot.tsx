import React, { useGlobal } from "reactn";

const Boot: React.FC = () => {
  const [_, setLoading] = useGlobal("loading");
  const launchServer = async (): Promise<void> => {
    setLoading(true);
    await fetch(`${process.env.REACT_APP_API_HOST}/boot`, {
      method: "POST",
      credentials: "include",
      mode: "cors"
    });
    setLoading(false);
  };
  return (
    <div className="Boot">
      <button onClick={launchServer}>きどう</button>
    </div>
  );
};

export default Boot;
