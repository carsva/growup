import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class PlantForm extends Component {
  render() {
    return (
      <AppConsumer>
        {state => (
          <div>
            <form autocomplete="false">
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
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
            <pre>{JSON.stringify(state, null, 4)}</pre>
          </div>
        )}
      </AppConsumer>
    );
  }
}

export default PlantForm;
