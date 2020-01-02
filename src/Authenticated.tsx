import React, { useGlobal } from "reactn";
import PropTypes from "prop-types";

const Authenticated: React.FC = props => {
  const [currentUser] = useGlobal("currentUser");
  return currentUser.allowed ? (
    <>{props.children}</>
  ) : (
    <div className="NotAllowed">
      <p>
        <a href="https://twitter.com/_naari_">なあり</a>
        のフォロワーしか触れません（；＿；）
      </p>
      <p>
        <a href="https://twitter.com/_naari_">なあり</a>
        にフォローしてもらってください（；＿；）
      </p>
    </div>
  );
};

Authenticated.propTypes = {
  children: PropTypes.node
};

export default Authenticated;
