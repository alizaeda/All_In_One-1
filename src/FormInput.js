import React, { Component } from "react";
import PropTypes from "prop-types";

class FormInput extends Component {
  state = {
    userInfo: {
      firstName: "",
      lastName: "",
      userName: "",
    },
    userExists: false,
  };
  userExist = (username) => {
    const users = this.props.users;
    for (let user of users) {
      if (username === user) return true;
    }
    return false;
  };
  handleOnChange = (event) => {
    const {name, value} = event.target;
    this.setState((currState) => ({
      
      ...currState,
      userInfo: {
        ...currState.userInfo,
        [name]: value,
      },
    }));
  };
  handleSubmit = (event) => {
    const { onAddUser } = this.props;
    const userExists = this.userExist(this.state.userInfo.userName);
    event.preventDefault();

    if (!userExists) {
      onAddUser(this.state.userInfo.userName);
      this.setState({
        userInfo: {
          firstName: "",
          lastName: "",
          userName: "",
        },
      });
    }
    this.setState(() => ({
      userExists,
    }));
  };
  onDisabled = () => {
    const { firstName, lastName, userName } = this.state.userInfo;
    return firstName === "" || lastName === "" || userName === "";
  };

  render() {
    const { firstName, lastName, userName } = this.state.userInfo;
    const { userExists } = this.state;
    return (
      <div>
        <h1>New User</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            value={firstName}
            type="text"
            placeholder="First Name"
            onChange={this.handleOnChange}
            name="firstName"
            autoComplete="off"
          />
          <input
            value={lastName}
            type="text"
            placeholder="Last Name"
            onChange={this.handleOnChange}
            name="lastName"
            autoComplete="off"
          />
          <input
            value={userName}
            type="text"
            placeholder="Username"
            onChange={this.handleOnChange}
            name="userName"
            autoComplete="off"
          />
          {userExists && <p>Username is already exists</p>}
          <button disabled={this.onDisabled()}>Play Now</button>
        </form>
      </div>
    );
  }
}

FormInput.propTypes = {
  users: PropTypes.array.isRequired,
  onAddUser: PropTypes.func.isRequired,
};

export default FormInput;
