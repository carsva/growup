import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class AmountPlant extends Component {
  render() {
    return (
      <div className="center">
        <h5>How many (dl) of water does it need per watering?</h5>
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
        <Link to="/addplant/tpm"><button>Next</button></Link>
      </div>
    );
  }
}

export default AmountPlant;
