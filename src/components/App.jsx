import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import MainPage from './main-page/MainPage';
import EmployeePage from './employee-page/EmployeePage';
import NoMatchPage from './no-match-page/NoMatchPage';
import { getEmployees } from '../actions';
import styles from './App.scss';

class App extends React.Component {

	componentDidMount() {
		this.props.getEmployees();
	}

	render () {
		return (	
			<Router>
				{this.props.loading 
					? <section className={styles.message}>Загрузка...</section>
					:(this.props.error !== ""
						?<section className={styles.message}>{this.props.error}</section>
						:<section className={styles.root}>
							<Switch>
								<Route path="/" exact={true} component={MainPage} />
								<Route path="/employee" component={EmployeePage} />
								<Route component={NoMatchPage} />
							</Switch>
						</section>
					)
				}
			</Router>	
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loading: state.loading,
		error: state.error
	};
}

const mapDispatchToProps = (dispatch) => {	
	return {
		getEmployees: () => {dispatch(getEmployees()); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);