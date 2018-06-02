import React, { Component } from 'react';
import Intro from './pages/Intro';
import Reg from './pages/Reg';
import AddPlant from './pages/AddPlant';
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
            <Route path="/addplant/name" component={NamePlant} />
            <Route path="/addplant/image" component={ImagePlant} />
            <Route path="/addplant/amount" component={AmountPlant} />
            <Route path="/addplant/times" component={TpmPlant} />
        </div>
      </Router>
    );


    return (
      <div>
        {BasicExample()}
      </div>
    );
  }
}

export default App;
