import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./signup_form.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      mobile: "",
      password: "",
      password2: "",
      demo: false,
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/reminders");
    } 
      
    this.setState({ errors: nextProps.errors });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    let demo = {
      email: "demo@fake.org",
      password: "password"
    }

    if (this.state.demo === true) {
      return this.props.login(demo)
    } else {
      return this.props.signup(user, this.props.history); 
    }
  }

  demoLogin() {
    this.setState({ demo: true });
  }

  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="signup-form-page">
        <header className="signup-page-header">
          <div className="signup-page-header-left">
            <Link to="/">
              <h1 className="header-logo">SchoolForce</h1>
            </Link>
          </div>
        </header>
        <div className="signup-form-container">
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="form-title">Sign up</div>
            <div className="signup-form">
              <div className="form-header-signup">
                <a href="#/signup">Sign Up</a>
                <a href="#/login">Log in</a>
              </div>

            <button className="demo-login-button" onClick={() => this.demoLogin()}>Demo Login</button>
              
              <div className="input-fields">
                <div className="input-fields-left">
                  <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.update("firstName")}
                    placeholder="First Name"
                    className="signup-input"
                  />
                    <input
                      type="text"
                      value={this.state.email}
                      onChange={this.update("email")}
                      placeholder="Email"
                      className="signup-input"
                    />
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    className="signup-input"
                  />
             
                </div>
                <div className="input-fields-left">
                  <input
                    type="text"
                    value={this.state.lastName}
                    onChange={this.update("lastName")}
                    placeholder="Last Name"
                    className="signup-input"
                  />
             
                  <input
                    type="text"
                    value={this.state.mobile}
                    onChange={this.update("mobile")}
                    placeholder="Phone Number"
                    className="signup-input"
                  />
                  <input
                    type="password"
                    value={this.state.password2}
                    onChange={this.update("password2")}
                    placeholder="Confirm Password"
                    className="signup-input"
                  />
                </div>
              </div>
              <div className="session-error-messages">{this.renderErrors()}</div>
              <input type="submit" value="Sign up" className="session-submit" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SignupForm);
