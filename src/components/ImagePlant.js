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
              <h5>Show the uploaded image here</h5>
              <button>Upload image</button>
            </div>
              <br/>
                <br/>
          <Link to="amount"><button>Next</button></Link>
          <br />
          <Link to="/home"><button>Cancel</button></Link>
          <Footer />
        </div>
    );
  }
}

export default ImagePlant;
