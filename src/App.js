import React, { Component } from 'react';
import Main from './pages/Main';
import AddPlant from './pages/AddPlant';
import Home from './pages/Home';
import Reg from './pages/Reg';
import Header from './components/Header';
import YourPlants from './pages/YourPlants';
import AmountPlant from './components/AmountPlant';
import ImagePlant from './components/ImagePlant';
import NamePlant from './components/NamePlant';
import TpmPlant from './components/TpmPlant';
import PlantStatus from './components/PlantStatus';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddPlantHeader from './components/AddPlantHeader';
import './App.min.css';

class App extends Component {

 constructor() {
   super();
   this.state = {
     test: 'joel',
     blomma: 'ja'
   }

 }

  render() {
    return (
  <Router>
    <div className="center">
        <Header />
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route exact path="/addplant" render={(props) => (
          <AddPlant
            test={this.state.test}
            blomma={this.state.blomma}
            masterState={this.state}

          />
        )} />
        <Route path='/image'component={ImagePlant}/>
        <Route path='/amount'component={AmountPlant}/>
        <Route path='/tpm'component={TpmPlant}/>
        <Route path='/main' exact component={Main}/>
      </Switch>
    </div>
  </Router>
    );
  }
}

export default App;
