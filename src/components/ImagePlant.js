import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ImagePlant extends Component {
  render() {
    return (
      <div className="center">
        <h5>Show the uploaded image here</h5>
        <button>Upload image</button>
        <br/>
        <Link to="/addplant/amount"><button>Next</button></Link>
      </div>
    );
  }
}

export default ImagePlant;
