import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import MainPage from './main-page/MainPage';
import ItemPage from './item-page/ItemPage';
import NoMatchPage from './no-match-page/NoMatchPage';

const App = () => (	
		<Router>
			<Switch>
			<Route path="/" exact="true" component={MainPage} />
			<Route path="/item/:id" component={ItemPage} />
			<Route component={NoMatchPage} />
			</Switch>
		</Router>	
)

export default hot(module)(App);