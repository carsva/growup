import React, { Component } from 'react';
import {  Link } from "react-router-dom";
import Header from './../components/Header';
import AddPlantHeader from './../components/AddPlantHeader';
import Footer from './../components/Footer';

class NamePlant extends Component {

  addNameHandlerChild(e) {
    e.preventDefault();
    let name = this.refs.name.value;
    let addName = this.props.addNameHandler;
    addName(name)
  }

  render() {



    return (
        <form onSubmit={(e) => this.addNameHandlerChild(e)}>
        <div className="center">
        <input type="text" ref="name" placeholder="Name of your plant"></input>
        </div>
        <button>Submit</button>
        </form>
    );
  }
}

export default NamePlant;
// const name = 'Lars'
//
//   }
//
//   return (
//       <div className="center">
//         <Header />
//         <AddPlantHeader/>
//         <form>
//         <input type="text" ref="name" placeholder="Name of your plant"></input>
//         <br/>
//         <Link to="/home"><button>Next</button></Link>
//         <br/>
//         <Link to="/home">Cancel</Link>
//         </form>
//         <Footer />
//         <Home name={this.name} />
//       </div>
//   );
// }
// }
