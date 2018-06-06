import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';





class ImagePlant extends Component {
  render() {



    return (
        <div className="center">
          <Header />
          <AddPlantHeader/>
            <div className="center">
              <h5>How many (dl) of water does it need per watering?</h5>
              <select name="amount" form="amount">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
              <br/>
            </div>
            <br/>
          <Link to="tpm">Next</Link>
          <br/>
          <Link to="/home">Cancel</Link>
          <Footer />
        </div>
    );
  }
}

export default ImagePlant;
