import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../AppContext';

class Plants extends Component {
  render() {
    return (
      /* We start with making the AppConsumer the parent tag and under
      it we insert the global state from AppContext.js*/
      <AppConsumer>
        {state => (
          <div>
            <h2>Plants</h2>
            <ul>
              /** Below we map through all the plants set in the global state in
              an unordered list showing the name of it. */
              {state.plants.map(({ id, name }) => (
                <li key={id}>
                  Plant: {name} <Link to={`/plants/edit/${id}`}>Edit</Link>
                </li>
              ))}
            </ul>
            <h2>Add plant</h2>
            <form
              onSubmit={e => {
                e.preventDefault();

                const values = {
                  name: e.target.name.value,
                  amount: e.target.amount.value,
                  timesPerMonth: e.target.timesPerMonth.value,
                };

                state.newPlant(values);

                e.target.name.value = '';
              }}
            >
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
