import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AmountPlant from './../components/AmountPlant';
import ImagePlant from './../components/ImagePlant';
import NamePlant from './../components/NamePlant';
import TpmPlant from './../components/TpmPlant';


class AddPlant extends Component {
  render() {
    return (
      <div className="center">
        <h1>Add your first plant</h1>
        <NamePlant/>
      </div>
    );
  }
}

export default AddPlant;
