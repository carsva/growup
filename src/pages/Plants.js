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
