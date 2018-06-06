import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {

  render() {

    return (

        <div>
          <Link to="/reg"><button>Log out</button></Link>
        </div>

    );
  }
}

export default Footer;
