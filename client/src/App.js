import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';
import About from './components/pages/About';

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import './App.css';

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<Fragment>
					<Router>
						<NavBar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
							</Switch>
						</div>
					</Router>
				</Fragment>
			</ContactState>
		</AuthState>
	);
};

export default App;
