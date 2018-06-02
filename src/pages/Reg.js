import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Reg extends Component {
  render() {
    return (
      <div className="center">
        <h2>Click the button to register</h2>
        <Link to="./addplant"><button>Register</button></Link>
      </div>
    );
  }
}

export default Reg;
