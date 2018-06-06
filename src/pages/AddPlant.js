import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';





class AddPlant extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <AddPlantHeader/>
          <Link to="/addplant/name"><button>Next</button></Link>
        </div>
    );
  }
}

export default AddPlant;
