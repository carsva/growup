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

  render() {
    const { handleSubmit } = this.props;
    const { values } = this.state;

    return (
      <form onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={values.id} />
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={this.handleChange('name')}
        />

        <input type="submit" />
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
            <EditPlantForm values={plant} handleSubmit={state.editPlant} />
          );
        }}
      </AppConsumer>
      <Link to="/plants">Back to plants</Link>
    </div>
  );
};

export default EditPlant;
