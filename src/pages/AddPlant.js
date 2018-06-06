import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';





class AddPlant extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <AddPlantHeader/>
          <Link to="/addplant/name">Next</Link>
          <br/>
          <Link to="/home">Cancel</Link>
          <Footer />
        </div>
    );
  }
}

export default AddPlant;
