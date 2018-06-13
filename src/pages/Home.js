import React, { Component } from 'react';
import PlantStatus from './../components/PlantStatus';
import Footer from './../components/Footer';
import NamePlant from '../components/NamePlant';
import ImagePlant from '../components/ImagePlant';
import AmountPlant from '../components/AmountPlant';
import TpmPlant from '../components/TpmPlant';
import Reg from '../pages/Reg';
import AddPlant from '../pages/AddPlant';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {

  constructor() {
    super();
    this.state = {
      addplantVisable: false
    }
  }

addFirstPlant(e) {
  console.log(e);
  this.setState({
    addplantVisable: true
  })
}

componentDidMount() {
  console.log('Asd')
}


    render() {
      let htmlContent = "";

      if(this.state.addplantVisable === true) {
        htmlContent = <AddPlant history={this.props.history}/>
      } else {
        htmlContent =
        <div>
          <h3>Welcome to the no.1 plant app</h3>
          <button onClick={(e) => this.addFirstPlant(e)}>Add your first plant</button>
        </div>

      }

      return (
        <div>
          {htmlContent}
        </div>
      );
   }
 }

export default Home;
