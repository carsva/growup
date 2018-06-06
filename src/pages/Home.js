import React, { Component } from 'react';
import Header from './../components/Header';
import PlantStatus from './../components/PlantStatus';
import Footer from './../components/Footer';

class Home extends Component {
  render() {
    return (
      <div className="center">
        <PlantStatus />
      </div>
    );
  }
}

export default Home;
