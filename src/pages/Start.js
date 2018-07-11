import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class Start extends Component {
  render() {
    return (
      <AppConsumer>
        {state => (
          <div>
            <p>Welcome to the no.1 plantsaver app</p>
            <ul>
              {state.plants.map(({ id, name }) => (
                <li key={id}>
                  {name} <Link to={`/edit/${id}`}>Edit</Link>
                </li>
              ))}
            </ul>
            <Link to="/plantform">
              <button>Add a plant</button>
            </Link>
            <pre>{JSON.stringify(state, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default Start;
