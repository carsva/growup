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
          <Link to="/addplant/name"><button>Next</button></Link>
          <br/>
          <Link to="/home"><button>Cancel</button></Link>
          <Footer />
        </div>
    );
  }
}

export default AddPlant;
