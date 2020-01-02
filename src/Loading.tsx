import React, { useGlobal } from "reactn";
import PropTypes from "prop-types";

const Loading: React.FC = props => {
  const [loading] = useGlobal("loading");
  return loading ? (
    <div className="Loading">ろーでぃんぐ</div>
  ) : (
    <>{props.children}</>
  );
};

Loading.propTypes = {
  children: PropTypes.node
};

export default Loading;
