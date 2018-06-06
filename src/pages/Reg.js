import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Header from './../components/Header';


class Reg extends Component {


  render() {



    return (
      <div className="center">
        <Header />
        <Link to="/home"><button>Log in</button></Link>
        <Link to="/main"><button>Register</button></Link>
      </div>

    );
  }
}

export default Reg;
