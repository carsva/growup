import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';
import NamePlant from './../components/NamePlant';
import ImagePlant from './../components/ImagePlant';
import AmountPlant from './../components/AmountPlant';
import TpmPlant from './../components/TpmPlant';

class AddPlant extends Component {
  constructor() {
    super();
    this.state = {
      isNameVisable: true,
      isAmountVisable: false,
      isTpmVisable: false,
      temp: []
    }
  }

  addNameHandlerParent(name) {
    let temp = this.state.temp;
    temp.name = name;
    this.setState(temp);
    this.setState({
    isNameVisable: false,
    isAmountVisable: true,
    isTpmVisable: false
    })
    console.log(this.state)
  }

  addAmountHandlerParent(amount) {
    let temp = this.state.temp;
    temp.amount = amount;
    this.setState(temp)
    this.setState({
    isNameVisable: false,
    isAmountVisable: false,
    isTpmVisable: true
    })
  }

  addTpmHandlerParent(tpm) {
    let temp = this.state.temp;
    temp.tpm = tpm;
    this.setState(temp)
    this.setState({
    isNameVisable: false,
    isAmountVisable: false,
    isTpmVisable: false

    })
    this.props.history.push('/')
  }

  formSendHandler(e) {
    e.preventDefault();
    console.log(e)
  }

  isHidden() {
    if(this.state.isNameVisable === true) {
      return (
        <NamePlant addNameHandler={(name) => this.addNameHandlerParent(name)}/>
      );
    }
      if(this.state.isAmountVisable === true) {
        return (
          <AmountPlant addAmountHandler={(amount) => this.addAmountHandlerParent(amount)}/>
        );
      }
        if(this.state.isTpmVisable === true) {
          return (
            <TpmPlant addTpmHandler={(tpm) => this.addTpmHandlerParent(tpm)}/>
          )
    }
  }



  render() {
    return (
      <div className="center">
          <AddPlantHeader/>
          {this.isHidden()}
      </div>
    )
  }
}

export default AddPlant;
