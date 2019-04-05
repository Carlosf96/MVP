import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state={
      name: '',
      email: '',
      pasword: '',
      password2: '',
      errors: {},
    };

    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  
  }
  onChange(e){
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  
  onSubmit(e){
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }

    console.log(newUser)

  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

componentName.propTypes = {

}

export default componentName