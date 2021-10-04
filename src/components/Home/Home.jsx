import React, { Component } from "react";
import { userContext } from "../../context/userContext";


class Home extends Component {
  constructor(props) {
    super(props)
    this.name = React.createRef();

  }

  handleSubmit = (e)=> {
    e.preventDefault()
    console.log("Handle"+this.name.current.value);
  }

  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name"  ref={this.name}/>
        <br/>
        <userContext.Consumer>
        {({ user, login }) =>
          <input type="submit" value="Enviar" onClick={() => login(this.name.current.value)} />
        }
        </userContext.Consumer>
      </form>
    );
  }
}

export default Home;
