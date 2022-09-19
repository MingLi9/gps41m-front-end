import React, { Component } from 'react'
import UserService from '../../services/UserService';
import "./User.css";

class EditComponent extends Component{
constructor() {
    super()
    this.state = {
      username: "",
      fullName: "",
    }
    this.gatheruserInfo();
  }

  gatheruserInfo(){
    
  }

  sendForm(event){
    event.preventDefault();
    const target = event.target;
    const username = target.username.value;
    const fullName = target.fullName.value;

    UserService.updateUser(username, fullName);
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
          <label htmlFor="fullName">Full name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter full name"
            onChange={this.handleChange}
          />
          <div className="lower">
            <input type="submit" value="Save" />
          </div>
        </form>
      </div>
    );
  }
}
export default EditComponent