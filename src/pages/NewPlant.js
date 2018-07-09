import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../AppContext';

class NewPlant extends Component {
  render() {
    return (
      <AppConsumer>
        {state => (
          <div>
            <pre style={{ textAlign: 'left' }}>
              {JSON.stringify(state, null, 4)}
            </pre>
            <form onSubmit={state.newPlant}>
              <input type="text" name="name" />
              <input type="submit" />
            </form>
            <Link to="/">Back to start</Link>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default NewPlant;
