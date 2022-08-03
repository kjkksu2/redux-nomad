import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { DELETE } from "../store";

const ToDo = ({ text, dispatch, ownProps }) => {
  const onClick = () => {
    dispatch({ type: DELETE, id: ownProps.id });
  };

  return (
    <li>
      <Link to={`/${ownProps.id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { dispatch, ownProps };
};

export default connect(null, mapDispatchToProps)(ToDo);
