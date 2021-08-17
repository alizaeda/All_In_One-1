import React, { Component } from "react";
import User from "./User";
import PropTypes from "prop-types";

class UserList extends Component {
  state = {
    showUserPlayedGames: true,
  };
  onBtnToggle = () => {
    this.setState((prevState) => ({
      showUserPlayedGames: !prevState.showUserPlayedGames,
    }));
  };
  render() {
    const { users } = this.props;
    const { showUserPlayedGames } = this.state;
    const showPlayedGamesBtn = (
      <button onClick={this.onBtnToggle} className="smallButton">
        {showUserPlayedGames ? "Hide" : "Show"} Played Games
      </button>
    );
    return (
      <div className="user-list">
        <h2>UserList</h2>
        {users && users.length > 0 && showPlayedGamesBtn}
        <ul className="user-list">
          {users.map((user, index) => (
            <User key={index} user={user} showPlayed={showUserPlayedGames} />
          ))}
        </ul>
      </div>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UserList;
