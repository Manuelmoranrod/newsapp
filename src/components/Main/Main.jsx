import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';

import Home from '../Home/Home'
import Form from '../Form/Form'
import ListNews from '../ListNews/ListNews'


class Main extends Component {
  constructor(props) {
    super(props)
    // estado que uso de Padre para Form & ListNews
    this.state = {
      newInfo: {
        title: '',
        body: '',
        author: '',
        date: ''
      }
    }
  }

  // Pasar la informacion tipo sibling
  passInfo = (props) => {
    console.log("Escribe estado", props);
    this.setState({newInfo: props}) 
  }
  
  render() {
    console.log("render main",this.state);
    return (
      <main>
        <Switch>
          <Route>
            <Route path="/home" component={Home} exact />
            <Route path="/form" component={()=> <Form passInfo={this.passInfo}/>} />
            <Route path="/list" component={()=> <ListNews noticias={this.state.newInfo}/> } />
          </Route>
        </Switch>
      </main>
    );
  }
}

export default Main;
