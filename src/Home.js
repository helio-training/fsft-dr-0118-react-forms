import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'

export default class extends Component {
  renderClassLogin() {
    return (
      <Login idHolder="UserName2"
             confirmHolder="Password2"
             buttonText="Submit"/>
    );
  }
  
  render (){
    const handleSubmit = (input) => {
      alert(input.idValue + " : " + input.confirmValue)
      // alert(this.state.idValue + ' - ' + this.state.confirmValue)
    }
    const renderFuncLogin = () => {
      return (
        <div>
          <Login idHolder="UserName1"
                 confirmHolder="Password1"
                 buttonText="Submit"
                 submitFunc={handleSubmit}/>
          <Login idHolder="UserName3"
                 confirmHolder="Password3"
                 buttonText="Submit"
                 submitFunc={handleSubmit}/>
        </div>
        
      );
    }
    return (
      <Router>
        <MuiThemeProvider>
          <Link to="/Login1">Login1</Link> <br/>
          <Link to="/Login2">Login2</Link>
          <hr/>
          <Route path='/Login1' component={renderFuncLogin}/>
          <Route path='/Login2' component={this.renderClassLogin}/>
          
        </MuiThemeProvider>
      </Router>
    );
  }
}