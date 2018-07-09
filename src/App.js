import React, { Component } from 'react';
import Main from './pages/Main';
import AddPlant from './pages/AddPlant';
import Reg from './pages/Reg';
import Header from './components/Header';
import YourPlants from './pages/YourPlants';
import AmountPlant from './components/AmountPlant';
import ImagePlant from './components/ImagePlant';
import NamePlant from './components/NamePlant';
import TpmPlant from './components/TpmPlant';
import PlantStatus from './components/PlantStatus';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPlantHeader from './components/AddPlantHeader';
import './App.min.css';
import { AppProvider } from './AppContext';
import Plants from './pages/Plants';
import EditPlant from './pages/EditPlant';

class App extends Component {
  render() {
    return (
      <AppProvider>
        <Router>
          <div className="center">
            <Header />
            <div>
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/image" component={ImagePlant} />
                <Route path="/amount" component={AmountPlant} />
                <Route path="/tpm" component={TpmPlant} />
                <Route path="/addplant" component={AddPlant} />
                <Route path="/plants/edit/:id" component={EditPlant} />
                <Route path="/plants" component={Plants} />
              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    );
  }
}

export default App;
// constructor() {
//   super();
//   this.state = {
//     addplantVisable: false
//   }
// }
//
// addFirstPlant(e) {
// console.log(e);
// this.setState({
//   addplantVisable: true
// })
// }
//
// componentDidMount() {
// console.log('Asd')
// }
//
//
//   render() {
//     let htmlContent = "";
//
//     if(this.state.addplantVisable === true) {
//       htmlContent = <AddPlant history={this.props.history}/>
//     } else {
//       htmlContent =
//       <div>
//         <h3>Welcome to the no.1 plant app</h3>
//         <button onClick={(e) => this.addFirstPlant(e)}>Add your first plant</button>
//       </div>
//
//     }
//
//     return (
//       <div>
//         {htmlContent}
//       </div>
//     );
//  }
// }
