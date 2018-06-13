import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';

class ImagePlant extends Component {

  addTpmHandlerChild(e) {
    e.preventDefault();
    let tpm = this.refs.tpm.value;
    let addTpm = this.props.addTpmHandler;
    addTpm(tpm);

  }

  render() {

    return (
      <div>
      <form onSubmit={(e) => this.addTpmHandlerChild(e)}>
        <div className="center">
            <div className="center">
                <h5>How many times per month does your plant need water?</h5>
                <select name="tpm" form="tpm" ref="tpm">
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
                <button>Send</button>
              </div>
        </div>
      </form>
      </div>
    );
  }
}

export default ImagePlant;
