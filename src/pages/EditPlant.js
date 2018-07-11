import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../AppContext';

class EditPlantForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: props.values,
    };
  }

  handleChange = name => e => {
    this.setState({
      ...this.state,
      values: {
        ...this.state.values,
        [name]: e.target.value,
      },
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const plantId = e.target.id.value;
    const newValues = {
      name: e.target.name.value,
    };

    this.props.save(plantId, newValues);
  };

  render() {
    const { values } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="hidden" name="id" value={values.id} />
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={this.handleChange('name')}
        />
        {/*1.When pressing save, the information in 
    the form "name" is sent to handleSubmit which 
    is a function in the parent that was sent
    down as a a prop */}
        <button>Save</button>
      </form>
    );
  }
}

const EditPlant = props => {
  const plantId = props.match.params.id;

  return (
    <div>
      <AppConsumer>
        {state => {
          const plant = state.plants.find(p => p.id === plantId);
          if (!plant) {
            return 'No plant found';
          }
          return (
            /*The Global state is passed down as values and sets the 
            state in editPlant to the the same as the global state*/
            <EditPlantForm values={plant} save={state.editPlant} />
          );
        }}
      </AppConsumer>
      <Link to="/">Back to plants</Link>
    </div>
  );
};

export default EditPlant;
