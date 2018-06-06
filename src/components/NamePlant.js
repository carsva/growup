import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';

class NamePlant extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <AddPlantHeader/>
          <input type="text" ref="name" placeholder="Name of your plant"></input>
          <Link to="image"><button>Next</button></Link>
        </div>
    );
  }
}

export default NamePlant;
