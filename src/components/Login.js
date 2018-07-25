import React, { Component } from "react";
// import { Row, Input } from "react-materialize";
import Navbar from './Navbar'
import Footer from './Footer'
import "../styling/Login.css"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        newUser: false
    };
  }
  render() {
    return (
      <div>
      <Navbar />
      <Footer />
      </div>
    );
  }
}

export default Login;
