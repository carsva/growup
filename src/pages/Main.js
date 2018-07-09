import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AddPlant from './AddPlant';
import { AppConsumer } from '../AppContext';

class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/plants">Plants</Link>
        <AppConsumer>
          {state => (
            <div>
              <pre>{JSON.stringify(state, null, 4)}</pre>
              <button onClick={state.toggleTheme}>Switch theme</button>
            </div>
          )}
        </AppConsumer>
      </div>
    );
  }
}

export default Main;
