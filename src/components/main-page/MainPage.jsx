import React from 'react';
import EmployeesList from './employees-list/EmployeesList';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions';

class MainPage extends React.Component {
	componentHasMounted() {
		this.props.getEmployees();
	}

	render() {
		let { loading } = this.props;
	return (
		<div>
			Main Page111
			{loading ? "Loading..." : <EmployeesList />}			
		</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getEmployees: dispatch(getEmployees())
	}
};

export default MainPage;