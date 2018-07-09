import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';
import AddPlant from './AddPlant'

class Main extends Component {

  constructor() {
    super();
    this.state = {
      addplantVisable: false
    }

  }

  onAddFirstPlant() {
      this.setState ({
      addplantVisable: true
    })
  }

  goBackTest(plantState) {
    this.setState ({
      addplantVisable: false
    })
    //Plantstate is the info coming from the form in AddPlant
    console.log(plantState)
  }

  render() {



    let htmlContent = "";

        if(this.state.addplantVisable === true) {
          htmlContent = <AddPlant history={this.props.history} goBackTest={(e) => this.goBackTest(e)}/>
        } else {
          htmlContent =
          <div>
            <button onClick={(e) => this.onAddFirstPlant(e)}>Add a plant</button>
          </div>

        }

    return (
      <div className="center">
        {htmlContent}
      </div>

    );
  }
}

export default Main;
