import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class PlantForm extends Component {
  render() {
    return (
      /* Again we use the AppConsumer to wrap everything around it
      in order to be able to access the global state 
      
      We have a form that lets you add a plant that takes a name,
      amount of water, times per month values. When submitting the
      form we have an anonymous function that makes a const called
      values. it contains all the input fields.

      After that you will send this newly created const values and
      send its values to the global function called newPlant.

      after sending it cleares the field input by setting below to
      and empty string. 
      e.target.name.value = ''; 


      
      */
      <AppConsumer>
        {state => (
          <div>
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
              <input type="text" name="name" placeholder="Name" />
              <br />

              <select name="amount">
                <option value="0">Amount of water (dl):</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br />
              <select name="timesPerMonth">
                <option value="0">Times per month:</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              <br />
              <button>Add plant</button>
            </form>
            <Link to="/">Back</Link>
            <pre>{JSON.stringify(state, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default PlantForm;
