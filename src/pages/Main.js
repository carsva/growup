import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';

class Main extends Component {


  render() {



    return (
      <div className="center">
        <Header />
        <p>Im the Main component</p>
        <Link to="addplant"><button>Next</button></Link>
      </div>

    );
  }
}

export default Main;
