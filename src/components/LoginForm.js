import React, { Component } from "react";
import { Row, Input } from "react-materialize";
import { request, AuthenticationService } from "./helpers"
import "../styling/Login.css"

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
      <Row>
        <Row className="login-form">
        <form
              onSubmit={event => {
                event.preventDefault();
                request("/auth/token", "post", {
                  username: event.target.email.value,
                  password: event.target.password.value
                })
                  .then(response => {
                    localStorage.setItem("token", response.data.token);
                    return request("/auth/token");
                  })
                  .then(response => {
                    AuthenticationService.setAuthState(response.data);
                    this.props.history.push("./Dashboard");
                  })
                  .catch(err => {
                    this.setState({loginError: true})
                  });
              }}
            >
              <Row className="form-input-row">
                <Input
                  className="login-form-input"
                  name="email"
                  type="email"
                  label="Email"
                />
                <Input
                  className="login-form-input"
                  name="password"
                  type="password"
                  label="Password"
                />
              </Row>
              <Row className="login-button">
                <Col>
                  <Button>Login</Button>
                </Col>
              </Row>
            </form>
        </Row>
        </Row>
      </div>
    );
  }
}

export default LoginForm;