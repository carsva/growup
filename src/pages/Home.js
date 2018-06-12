import React, { Component } from 'react';
import Header from './../components/Header';
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

    render() {

      return (
        <Router>
          <div className="center">
              <Header />
              <Switch>
              <Route path='/' exact component={AddPlant}/>
              <Route path='/image'component={ImagePlant}/>
              <Route path='/amount'component={AmountPlant}/>
              <Route path='/tpm'component={TpmPlant}/>
              <Route path='/reg' exact component={Reg}/>
            </Switch>
          </div>
        </Router>
      );
   }
 }

export default Home;
