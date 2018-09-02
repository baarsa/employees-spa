import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import MainPage from './main-page/MainPage';
import EmployeePage from './employee-page/EmployeePage';
import NoMatchPage from './no-match-page/NoMatchPage';
import { getEmployees } from '../actions';

class App extends React.Component {

	componentDidMount() {
		this.props.getEmployees();
	}

	render () {
		return (	
			<Router>
				{this.props.loading 
					? <section>Loading...</section>
					:<Switch>
						<Route path="/" exact={true} component={MainPage} />
						<Route path="/employee" component={EmployeePage} />
						<Route component={NoMatchPage} />
					</Switch>
				}
			</Router>	
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading
	};
}

const mapDispatchToProps = (dispatch) => {	
	return {
		getEmployees: () => {dispatch(getEmployees()); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);