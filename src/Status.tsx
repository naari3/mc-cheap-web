import React, { useEffect, useGlobal } from "reactn";
import client from "./client";

// "Pending" | "InService" | "Terminating" | "Terminated"
const statusMessages = {
  InService: "やってます",
  Launching: "もうちょっとです",
  Pending: "たててるところです",
  Terminating: "おとしてます",
  Terminated: "やってません"
};

const Status: React.FC = () => {
  const [, setMessage] = useGlobal("message");
  const [serverStatus, setServerStatus] = useGlobal("serverStatus");
  const [launching, setLaunching] = useGlobal("launching");

  const updateStatusMessage = async (): Promise<void> => {
    const res = await client("/instance_status");
    if (res.status !== 200) {
      setMessage("なんかおかしい、連絡してください");
    }
    const status = (await res.json()).status as
      | "InService"
      | "Launching"
      | "Pending"
      | "Terminating"
      | "Terminated";
    if (launching && status === "InService") {
      setLaunching(false);
      setMessage("たった！");
    }
    setServerStatus(status);
  };

  useEffect(() => {
    const intervalId = setInterval(updateStatusMessage, 7000);
    return (): void => {
      clearInterval(intervalId);
    };
  });
  return <div className="Status">{statusMessages[serverStatus]}</div>;
};

export default Status;
