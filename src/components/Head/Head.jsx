import React, { Component } from "react";
import { userContext } from "../../context/userContext";
import Nav from '../Nav/Nav'

class Head extends Component {
  render() {
    return (
      <header className="header">

        <userContext.Consumer>
          {({user,logout})=> 
          user.name?
          <>
            <h3>HOLI {user.name}</h3>
            <button onClick={logout}>Salir</button>
          </>:""
          }
        </userContext.Consumer>
        
        <Nav/>
      </header>
    );
  }
}

export default Head;
