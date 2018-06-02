import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AmountPlant from './../components/AmountPlant';
import ImagePlant from './../components/ImagePlant';
import NamePlant from './../components/NamePlant';
import TpmPlant from './../components/TpmPlant';



class AddPlant extends Component {
  render() {

    const BasicExample = () => (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/addplant/image">Image</Link>
            </li>
            <li>
              <Link to="/addplant/name">Name</Link>
            </li>
          </ul>

          <hr />

          <Route path="/addplant/name" component={Name} />
          <Route path="/addplant/image" component={Image} />
        </div>
      </Router>
    );


    const Name = () => (
  <div>
    <NamePlant />
  </div>
);

const Image = () => (
  <div>
    <ImagePlant />
  </div>
);

    return (
      <div>
        {BasicExample()}
      </div>
    );
  }
}

export default AddPlant;
