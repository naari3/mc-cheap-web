import React, { useState } from "reactn";

const Status: React.FC = () => {
  const [running] = useState(false);
  return (
    <div className="Status">
      {running ? <p>やってます</p> : <p>やってません</p>}
    </div>
  );
};

export default Status;
