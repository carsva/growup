import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';

class ImagePlant extends Component {

  addAmountHandlerChild(e) {
    e.preventDefault();
    let amount = this.refs.amount.value;
    let addAmount = this.props.addAmountHandler;
    addAmount(amount)
  }

  render() {

    return (<div className="center">
      <div className="center">
        <h5>How many (dl) of water does it need per watering?</h5>
        <form onSubmit={(e) => this.addAmountHandlerChild(e)}>
          <select name="amount" form="amount" ref="amount">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <button>Set</button>
        </form>
        <br/>
      </div>
    </div>);
  }
}

export default ImagePlant;
