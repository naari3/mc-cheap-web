import React, { useState, useEffect, useGlobal } from "reactn";
import client from "./client";

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
      const res = await client("/instance_status");
      if (res.status !== 200) {
        setMessage("なんかおかしい、連絡してください");
      }
      const status = (await res.json()).status as
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
