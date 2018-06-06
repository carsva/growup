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
import './App.css';


class App extends Component {



  render() {
return (
  <Router>
    <div>
    <Switch>
      <Route path='/' exact component={Reg}/>
      <Route path='/home' exact component={Home}/>
      <Route path='/reg' exact component={Reg}/>
      <Route path='/home/yourplants' exact component={YourPlants} />
      <Route path='/home/plantstatus' exact component={PlantStatus} />
      <Route path='/main' exact component={Main} />

      {/* both /roster and /roster/:number begin with /roster */}
      <Route path='/addplant' exact component={AddPlant}/>
      <Route path='/addplant/name' exact component={NamePlant}/>
      <Route path='/addplant/image' exact component={ImagePlant}/>
      <Route path='/addplant/amount' exact component={AmountPlant}/>
      <Route path='/addplant/tpm' exact component={TpmPlant}/>
    </Switch>
    </div>
  </Router>
    );
  }
}

export default App;
