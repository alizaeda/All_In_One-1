import React from "react";
import PropTypes from "prop-types";

const User = (props) => {
  const { user, showPlayed } = props;
  return (
    <li>
      The Number of games That {user} has played is {showPlayed ? "0" : "/*"}
    </li>
  );
};

User.propTypes = {
  user: PropTypes.string.isRequired,
  showPlayed: PropTypes.bool.isRequired,
};

export default User;
