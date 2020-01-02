import React, { useState, useEffect, useGlobal } from "reactn";
// "Pending" | "InService" | "Terminating" | "Terminated"
const statusMessages = {
  Pending: "たててます",
  InService: "やってます",
  Terminating: "おとしてます",
  Terminated: "やってません"
};

const Status: React.FC = () => {
  const [running, setRunning] = useState(statusMessages.Terminated);
  const [, setMessage] = useGlobal("message");

  useEffect(() => {
    const intervalId = setInterval(async () => {
      const req = await fetch(
        `${process.env.REACT_APP_API_HOST}/instance_status`,
        {
          credentials: "include",
          mode: "cors"
        }
      );
      if (req.status !== 200) {
        setMessage("なんかおかしい、連絡してください");
      }
      const status = (await req.json()).status as
        | "Pending"
        | "InService"
        | "Terminating"
        | "Terminated";
      setRunning(statusMessages[status]);
    }, 10000);
    return (): void => {
      clearInterval(intervalId);
    };
  });
  return (
    <div className="Status">
      {running ? <p>やってます</p> : <p>やってません</p>}
    </div>
  );
};

export default Status;
