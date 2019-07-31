import React, { Component } from 'react'
import './sign-in.styles.scss'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    // reset the state
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    // Pulls value and name from event.target
    // event.target is the input
    const { value, name } = event.target
    // dynamically sets state to inputs from user
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            name='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type='submit' value='Submit Form' />
        </form>
      </div>
    )
  }
}

export default SignIn
