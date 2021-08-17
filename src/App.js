import React, { Component } from "react";
import FormInput from "./FormInput";
import "./App.css";
import logo from "./logo.svg";
import UserList from "./UserList";

class App extends Component {
  state = {
    users: [],
  };
  createContact = (user) => {
    this.setState((currState) => ({
      users: [...currState.users, user],
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <FormInput users={this.state.users} onAddUser={this.createContact} />

        <UserList users={this.state.users} />
      </div>
    );
  }
}

export default App;
