import React, { Component } from 'react';

class ImagePlant extends Component {
  render() {
    return (
      <div className="center">
        <h5>Show the uploaded image here</h5>
        <button>Upload image</button>
        <br/>
        <button>Next</button>
      </div>
    );
  }
}

export default ImagePlant;
