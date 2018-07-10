import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class Start extends Component {


    render() {
        return (
            <AppConsumer>
                {state => (
                    <div>
                    <p>Welcome to the no.1 plantsaver app</p>
                    <Link to="/plantform"><button>Add your first plant</button></Link>
                    <pre>{JSON.stringify(state, null, 4)}</pre>
                    </div>
            )}
            </AppConsumer>
        )
    }
}

export default Start; 

