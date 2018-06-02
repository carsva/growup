import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AmountPlant from './../components/AmountPlant';
import ImagePlant from './../components/ImagePlant';
import NamePlant from './../components/NamePlant';
import TpmPlant from './../components/TpmPlant';
import Home from './../pages/Home';



class AddPlant extends Component {
  render() {

    const BasicExample = () => (
      <Router>
        <div>
          <Route path="/addplant/name" component={Name} />
          <Route path="/addplant/image" component={Image} />
            <Route path="/addplant/amount" component={Amount} />
            <Route path="/addplant/tpm" component={Tpm} />

        </div>
      </Router>
    );


    const Name = () => (
  <div>
    <NamePlant />
  </div>
);

const Image = () => (
  <div>
    <ImagePlant />
  </div>
);

const Amount = () => (
  <div>
    <AmountPlant/>
  </div>
);

const Tpm = () => (
  <div>
    <TpmPlant />
  </div>
);

    return (
      <div>
        <h1>Lägg till din blomma</h1>
        {BasicExample()}
      </div>
    );
  }
}

export default AddPlant;
