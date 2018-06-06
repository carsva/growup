import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';

class Main extends Component {


  render() {



    return (
      <div className="center">
        <Header />
        <p>Im the Main component</p>
        <Link to="addplant"><button>Next</button></Link>
        <Footer />
      </div>

    );
  }
}

export default Main;
