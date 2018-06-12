import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';



class YourPlants extends Component {
  render() {

    return (
        <div className="center">
        <Header />
          <p>Your Plants</p>
          <Link to="/home">Back</Link>
          <br/>
          <Footer />
        </div>
    );
  }
}

export default YourPlants;
