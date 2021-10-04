import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <ul>
          <li className="nav-element"><Link to="/home">Home</Link></li>
          <li className="nav-element"><Link to="/form">Form</Link></li>
          <li className="nav-element"><Link to="/list">List</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
