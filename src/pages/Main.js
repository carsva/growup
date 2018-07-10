import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
