import React from 'react';

export const AppContext = React.createContext('plant');

let id = 0;

const getId = () => ++id;

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

  newPlant = e => {
    // const obj = {
    //   foo: 'bar',
    // }

    // const obj2 = {
    //   ...obj,
    //   zoo: 'cow',
    // }
    // const obj3 = Object.assign({}, obj)

    e.preventDefault();

    this.setState({
      ...this.state,
      plants: [
        ...this.state.plants,
        {
          ...newPlant(),
          name: e.target.name.value,
        },
      ],
    });

    e.target.name.value = '';
  };

  render() {
    const value = {
      ...this.state,
      toggleTheme: this.toggleTheme,
      newPlant: this.newPlant,
    };

    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
