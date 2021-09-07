import React, { Component } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className={classes.navbarWrapper}>
          <div>
            <Link to="/">Homepage</Link>
          </div>
          <div>
            <Link to="/users">Add users</Link>
          </div>
          <div>
            <Link to="/exercise">Add exercise</Link>
          </div>
        </div>
      </div>
    );
  }
}
