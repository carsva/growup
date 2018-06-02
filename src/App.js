import React, { Component } from 'react';
import Intro from './pages/Intro';
import Reg from './pages/Reg';
import AddPlant from './pages/AddPlant';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import AmountPlant from './components/AmountPlant';
import ImagePlant from './components/ImagePlant';
import NamePlant from './components/NamePlant';
import TpmPlant from './components/TpmPlant';
import './App.css';

class App extends Component {

  render() {

    const BasicExample = () => (
      <Router>
        <div>
          <Route exact path="/" component={Intro} />
          <Route path="/reg" component={Reg} />
          <Route path="/addplant" component={AddPlant} />
          <Route path="/home" component={Home} />


        </div>
      </Router>
    );


    return (
      <div>
        <h1>From App.js</h1>
        {BasicExample()}
      </div>
    );
  }
}

export default App;
