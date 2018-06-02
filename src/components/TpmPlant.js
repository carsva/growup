import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './../pages/Home';

class TpmPlant extends Component {
  render() {

    return (
      <div className="center">
          <h5>How many times per month does your plant need water?</h5>
          <select name="amount" form="amount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <br/>
          <Link to="./"><button>Next</button></Link>
        </div>
    );
  }
}

export default TpmPlant;
