import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';

class Reg extends Component {


  render() {



    return (
      <div className="center">
        <Header />
        <Link to="/main"><button>Log in</button></Link>
        <Link to="/main"><button>Register</button></Link>
      </div>

    );
  }
}

export default Reg;
