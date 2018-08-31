import React from 'react';
import Employee from './employee/Employee';
import { connect } from 'react-redux';

const EmployeesList = ({ employees }) =>  (
	<table>
		<tbody>
			{employees.map(employee => <Employee data={employee} />)}
		</tbody>
	</table>
);

const mapStateToProps = state => {
	return {
		employees: state.shownEmployees.map(id => state.employees[id])
	};
};

export default connect(mapStateToProps)(EmployeesList);