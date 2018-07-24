import React, { Component } from 'react';
import { AppConsumer } from '../AppContext';
import { Link } from 'react-router-dom';

class Start extends Component {
	render() {
		return (
			/* 
      AppConsumer is wrapped around together with {state => ( etc just in order for the
      context variables/global state should be available inside it.
      A function maps all the plants and outputs it in an unordered list fetching the 
      id and the name together with a link that is generated based
      on the id using react router.

      This one is written so that the state can be outputted
      and you need to stringify it in order for it to be 
      converted. <pre> makes it written with a cool old font.

      <pre>{JSON.stringify(state, null, 4)}</pre>
    
      */
			<AppConsumer>
				{state => (
					<div>
						<p>Welcome to the no.1 plantsaver app</p>
						<ul>
							{state.plants.map(({ id, name }) => (
								<li key={id}>
									{name} <Link to={`/edit/${id}`}>Edit</Link>
								</li>
							))}
						</ul>
						<Link to="/plantform">
							<button>Add a plant</button>
						</Link>
						<pre>{JSON.stringify(state, null, 4)}</pre>
					</div>
				)}
			</AppConsumer>
		);
	}
}

export default Start;
