import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class NamePlant extends Component {
  render() {
    return (
      <div className="center">
          <input type="text" ref="name" placeholder="Name of your plant"></input>
          <Link to="/addplant/image"><button>Next</button></Link>
          <br/>
      </div>
    );
  }
}

export default NamePlant;
