import React from 'react';

//We create our context
export const AppContext = React.createContext('plant');

//We create a const of id
let id = 0;

/*We make a function to give every object it own Id by plussing 1
to every new Id. We add the empty string just because we need to
make it into a string. Why is not clear to me yet! :) 
 */
const getId = () => (++id).toString();

//We set up a default plant object
const defaultPlant = {
  id: null,
  name: null,
  amount: null,
  timesPerMonth: null,
};

/* 
The newPlant function is recieving a name, amount
and timesPerMonth values from the PlantForm.js.

*/
const MakeNewPlant = () => {
  return {
    ...defaultPlant,
    id: getId(),
  };
};
/* We create our global context state here below. 
All other components will have access to this state*/
export class AppProvider extends React.Component {
  state = {
    theme: 'light',
    superhero: 'Calle',
    plants: [
      {
        /* Adds new plant into this object using
        the spread operator so that we will have
        a start object with values to start with
        looking like below
        {
            "id": "1",
            "name": "Something",
            "amount": null,
            "timesPerMonth": null
        }*/

        ...MakeNewPlant(),
        name: 'Something',
      },
    ],
  };

  /* The function below uses the ternery operator to 
  ask if the theme is set to light and if it is. It should
  set it to dark. If not set to light, then it should be
  set to light */

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }));
  };

  editPlant = (id, newValues) => {
    {
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

/*  
The values from the form is passed into the below function
with values containing name, amount, timesPerMonth.
MakeNewPlant is a function making a new idea with some
placeholder values. When adding the ...values with spread
operator the placeholder values are replaced.
*/

  newPlant = values => {
    this.setState({
      ...this.state,
      plants: [
        ...this.state.plants,
        {
          ...MakeNewPlant(),
          ...values,
        },
      ],
    });
  };

  /**
   Here we create the object that should be distributed to
   all other components. The global state is put into a
   const for export. All in the value const will be available
   for the other components
   */
  render() {
    const value = {
      ...this.state,
      toggleTheme: this.toggleTheme,
      newPlant: this.newPlant,
      editPlant: this.editPlant,
    };
    /** 
     Now we pass the value const into the value property in order
     to distribute it to all AppConsumers. Thats how you fetch
     the data from the global context. All components that uses
     the AppConsumer is children of the provider.
    */
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;
