import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader'
import MainPage from './main-page/MainPage';
import EmployeePage from './employee-page/EmployeePage';
import NoMatchPage from './no-match-page/NoMatchPage';

const App = () => (	
		<Router>
			<Switch>
			<Route path="/" exact={true} component={MainPage} />
			<Route path="/employee" component={EmployeePage} />
			<Route component={NoMatchPage} />
			</Switch>
		</Router>	
)

export default App;