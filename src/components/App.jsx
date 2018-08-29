import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainPage from './main-page/MainPage';
import ItemPage from './item-page/ItemPage';
import NoMatchPage from './no-match-page/NoMatchPage';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Switch>
			<Route path="/" exact="true" component={MainPage} />
			<Route path="/item/:id" component={ItemPage} />
			<Route component={NoMatchPage} />
			</Switch>
		</Router>
	</Provider>
)

export default App;