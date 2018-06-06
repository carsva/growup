import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Header from './../components/Header';

class PlantStatus extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <p>Your plants are watered!</p>
          <br/>
          <Link to="home/yourplants">Your plants</Link>
            <br/>
          <Link to="addplant">Add another plant</Link>
          <br/>
          <br/>
          <Link to="/reg">Log out</Link>
        </div>
    );
  }
}

export default PlantStatus;
