import React from 'react';

export const AppContext = React.createContext('plant');

const defaultPlant = {
  name: null,
  amount: null,
  timesPerMonth: null,
};

export class AppProvider extends React.Component {
  state = {
    theme: 'light',

    plants: [
      {
        ...defaultPlant,
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
          ...defaultPlant,
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
