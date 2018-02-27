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
      idValue: '',
      confirmValue: ''
    }
    
    
  }
  
  render() {
    const handleIDChange = (event) => {
      this.setState({ idValue: event.target.value })
    }
    const handleConfirmChange = (event) => {
      this.setState({ confirmValue: event.target.value })
    }
    const handleClick = () => {
      console.log(this.state.idValue + ' - ' + this.state.confirmValue)
    }
    return (
      <Paper>
        <form>
          <label for="idField">{this.state.idHolder}:</label>
          <input name="idField"
                 type="text"
                 placeholder={this.state.idHolder}
                 onChange={handleIDChange}/>
          <br/>
          <label for="confirm">{this.state.confirmHolder}:</label>
          <input name="confirm"
                 type="password"
                 placeholder={this.state.confirmHolder}
                 onChange={handleConfirmChange}/>
          <br/>
          <RaisedButton label={this.state.buttonText}
                        onClick={handleClick}/>
        </form>
      </Paper>
    )
  }
}
