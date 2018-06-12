import React, { Component } from 'react';
import Main from './pages/Main';
import AddPlant from './pages/AddPlant';
import Home from './pages/Home';
import Reg from './pages/Reg';
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



  render() {
return (
  <Router>
    <div>
      <Route path='/' component={Home}/>
    </div>
  </Router>
    );
  }
}

export default App;
