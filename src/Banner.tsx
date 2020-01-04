import React, { useEffect, useState } from "reactn";

const Status: React.FC = () => {
  const [count, setCount] = useState(0);
  const updateBanner = async (): Promise<void> => {
    setCount(count + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(updateBanner, 7000);
    return (): void => {
      clearInterval(intervalId);
    };
  });
  return <div className="Banner">
    <iframe
      key={count}
      src="https://mc.erinn.biz/intl/polling.html.php?server_addr=mc.naari3.net"
      style={{
        width: "300px",
        height: "60px",
        border: "none"
      }}
    ></iframe>
  </div>;
};

export default Status;
