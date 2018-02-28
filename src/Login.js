import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      idHolder: this.props.idHolder,
      confirmHolder: this.props.confirmHolder,
      buttonText: this.props.buttonText,
      submitFunc: this.props.submitFunc,
      idValue: '',
      confirmValue: '',
      errorMsg: ''
    }
    
    
  }
  
  render() {
    const handleIDChange = (event) => {
      this.setState({ idValue: event.target.value })
      if (this.state.idValue.length >= 20) {
        this.setState({ errorMsg: 'Your Username is too long' })
      }
      else if (this.state.idValue.length <= 8) {
        this.setState({ errorMsg: 'Your Username is too short' })
      }
    }
    const handleConfirmChange = (event) => {
      this.setState({ confirmValue: event.target.value })
    }
    const handleSubmit = () => {
      this.state.submitFunc(this.state)
    }
    return (
      <Paper>
        <form onSubmit={handleSubmit}>
          <label for="idField">{this.state.idHolder}:</label>
          <input name="idField"
                 type="text"
                 placeholder={this.state.idHolder}
                 onChange={handleIDChange}
                 pattern=".{8,20}"
                 title={this.state.errorMsg}
          />
          <br/>
          <label for="confirm">{this.state.confirmHolder}:</label>
          <input name="confirm"
                 type="password"
                 placeholder={this.state.confirmHolder}
                 onChange={handleConfirmChange}/>
          <br/>
          <RaisedButton label={this.state.buttonText}
                        type="submit"/>
        </form>
      </Paper>
    )
  }
}
