import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';

class Main extends Component {


  render() {



    return (
      <div className="center">
        <Header />
        <p>Welcome to this simple and much conveniant , lets save some plants today!</p>
        <Link to="addplant"><button>Next</button></Link>
        <Footer />
      </div>

    );
  }
}

export default Main;
