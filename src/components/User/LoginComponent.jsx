import React, { Component } from 'react'
import UserService from '../../services/UserService';
import "./User.css";
import { Link } from "react-router-dom";

class LoginComponent extends Component{
constructor() {
    super()
    this.state = {
      username: "",
      password: "",
    }
  }

  sendForm(event){
    event.preventDefault();
    const target = event.target;
    const username = target.username.value;
    const password = target.password.value;

    UserService.login(username, password).then(alert("Authentication succesful"));
  }

  render() {
    return (
      <div className="logincontainer">
        <form onSubmit={this.sendForm}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter username"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <div className="lower">
            <Link to="/register" className="registerLink">Register here</Link>
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}
export default LoginComponent