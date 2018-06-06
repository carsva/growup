import React, { Component } from 'react';
import Main from './pages/Main';
import AddPlant from './pages/AddPlant';
import Home from './pages/Home';
import AmountPlant from './components/AmountPlant';
import ImagePlant from './components/ImagePlant';
import NamePlant from './components/NamePlant';
import TpmPlant from './components/TpmPlant';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';


class App extends Component {



  render() {
return (
  <Router>
    <div>
    <Switch>
      <Route path='/' exact component={Main}/>
      <Route path='/home' exact component={Home}/>
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
