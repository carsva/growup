import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../AppContext';

class Plants extends Component {
  render() {
    return (
      <AppConsumer>
        {state => (
          <div>
            <h2>Plants</h2>
            <ul>
              {state.plants.map(({ id, name }) => (
                <li key={id}>
                  Plant: {name}{' '}
                  <Link to="/plants/edit" params={{ id: id }}>
                    Edit
                  </Link>
                </li>
              ))}
            </ul>
            <h2>Add plant</h2>
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

export default Plants;
