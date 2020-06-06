import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
 constructor(){ 
  super();

  this.state = {
    text: ''
  };
}

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit = {
          (event) => this.handleSubmit(event)
          }>
          <p>
            <label> add todo</label>
            <input type="text" name="text" id="" onChange= {(event) => this.handleInput(event)} value={this.state.text}/>
          </p>
            <input type="submit" value="Submit"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
return {
  addTodo: (formData) => dispatch({type: 'ADD_TODO', payload: formData })
  };
};

export default connect(null, mapDispatchToProps)(CreateTodo);
