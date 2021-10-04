import './App.css';
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';

import Head from './components/Head/Head'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { userContext } from './context/userContext';


export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      user: {
        name: "",
      }
    }
  }

  
  login = (name, email, edad, url) => {
    this.setState({
      user: {
        name: name,
        email: email,
        edad: edad,
        url: url,
      }
    })
  }

  logOut = () => {
    this.setState({
      user: {
        name: '',
        
      }
    });
  }
  

  render() {
    const value = {
      user: this.state.user,
      login: this.login,
      logout: this.logOut
    }

    return (
      <div className="app">
          <BrowserRouter>
          <userContext.Provider value={value}>
            <Head />
            <Main />
          </userContext.Provider>
          </BrowserRouter>
        <Footer />
      </div>
    )
  }
}

export default App


