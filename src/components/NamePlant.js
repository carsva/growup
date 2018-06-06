import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';

class NamePlant extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <AddPlantHeader/>
          <input type="text" ref="name" placeholder="Name of your plant"></input>
          <Link to="image"><button>Next</button></Link>
          <Link to="/home"><button>Cancel</button></Link>
          <Footer />
        </div>
    );
  }
}

export default NamePlant;
