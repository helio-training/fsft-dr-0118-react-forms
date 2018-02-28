import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'

export default class extends Component {
  render (){
    const renderLogin = () => {
      return (
        <Login idHolder="UserName"
               confirmHolder="Password"
               buttonText="Submit"/>
      );
    }
    return (
      <Router>
        <MuiThemeProvider>
          <Link to="/Login">Login</Link>
          <hr/>
          <Route path="/Login" component={renderLogin}/>
        </MuiThemeProvider>
      </Router>
    );
  }
}