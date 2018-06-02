import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="center">
        <h2>Alla växter är vattnade!</h2>
      </div>
    );
  }
}

export default Home;
