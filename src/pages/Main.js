import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';

class Main extends Component {


  render() {

    return (
      <div className="center">
        <p>Welcome to the plant save app</p>
        <Link to="/addplant"><button>Add a plant</button></Link>
      </div>

    );
  }
}

export default Main;
