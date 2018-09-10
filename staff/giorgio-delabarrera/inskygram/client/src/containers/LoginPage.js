import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import logic from "../logic"
import Login from '../components/Login';

class LoginPage extends Component {

  state = {
    loginError: ''
  }

  goToRegister = event => {
    event.preventDefault()
    this.props.history.push('/accounts/register')
  }

  handleLoginSubmit = (username, password) => {
    logic.authenticate(username, password)
      .then(token => this.props.onLoggedIn(username, token))
      .catch(({ message }) => this.setState({ loginError: `Upps, ${message}` }))
  }

  render() {
    return (
      <div className="login-wrapper">
        <Login onSubmit={this.handleLoginSubmit} error={this.state.loginError} />
        <section className="block">
          <div className="block-message">Don't have an account? <a href="#/" onClick={this.goToRegister}>Sign up</a></div>
        </section>
      </div>
    )
  }
}

export default withRouter(LoginPage)