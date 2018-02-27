import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Login from './Login'

export default class extends Component {
  render (){
    return (
      <div>
        <MuiThemeProvider>
          <Login idHolder="UserName"
                 confirmHolder="Password"
                 buttonText="Submit"/>
        </MuiThemeProvider>
      </div>
    );
  }
}