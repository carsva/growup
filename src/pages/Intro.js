import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Intro extends Component {
  render() {
    return (
      <div className="center">
        <h2>Appen som kommer ihåg när dina växter ska vattnas</h2>
        <Link to="./reg"><button>Lets goo!</button></Link>
      </div>
    );
  }
}

export default Intro;
