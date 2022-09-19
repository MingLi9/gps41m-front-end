import React, { Component } from 'react'
import UserService from '../../services/UserService';
import "./User.css";

class RegisterComponent extends Component{
constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
  }

  sendForm(event){
    event.preventDefault();
    const target = event.target;
    const username = target.username.value;
    const password = target.password.value;

    UserService.register(username, password).then(()  => {}).catch(alert("Registation succesful"));
  }

  render() {
    return (
      <div className="registercontainer">
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
            onChange={this.handleChange}
          />
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={this.handleChange}
          />
          <div className="lower">
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    );
  };
}
export default RegisterComponent