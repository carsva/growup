import React from 'react';

export const AppContext = React.createContext('plant');

let id = 0;

const getId = () => ++id + '';

const defaultPlant = {
  id: null,
  name: null,
  amount: null,
  timesPerMonth: null,
};

function newPlant() {
  return {
    ...defaultPlant,
    id: getId(),
  };
}

export class AppProvider extends React.Component {
  state = {
    theme: 'light',
    superhero: 'Calle',
    plants: [
      {
        ...newPlant(),
        name: 'Something',
      },
    ],
  };

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  editPlant = (id, newValues) => {
    {
      /*3.The name is passed into the (e)  */
    }

    this.setState({
      ...this.state,
      plants: this.state.plants.map(plant => {
        if (plant.id === id) {
          return {
            ...plant,
            ...newValues,
          };
        }
        return plant;
      }),
    });
  };

  newPlant = values => {
    // const obj = {
    //   foo: 'bar',
    // }

    // const obj2 = {
    //   ...obj,
    //   zoo: 'cow',
    // }
    // const obj3 = Object.assign({}, obj)

    this.setState({
      ...this.state,
      plants: [
        ...this.state.plants,
        {
          ...newPlant(),
          ...values,
        },
      ],
    });
  };

  render() {
    const value = {
      ...this.state,
      toggleTheme: this.toggleTheme,
      newPlant: this.newPlant,
      editPlant: this.editPlant,
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
