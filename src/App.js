import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		message: 'YA, Hacktiv8!'
	// 	}
	// } kurung ini dipake kalo render diluar dari constructor
	

	render() {
		return (
			
			<Router>
				<div className='App'>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/about' component={About} />
						{/* <Route component={Four0Four} /> */}
					</Switch>

					<MuiThemeProvider>
						<Home />
					</MuiThemeProvider>
				</div>
			</Router>

			

		);
	}
}

export default App;