import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Header';
import Footer from './../components/Footer';
import AddPlant from './AddPlant';

class Main extends Component {
  render() {
    return (
      <div>
        <Link to="/addplant">Add plant</Link>
      </div>
    );
  }
}

export default Main;
