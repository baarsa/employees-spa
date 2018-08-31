import React from 'react';
import Employee from './employee/Employee';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

const EmployeesList = ({ employees }) =>  (
	<table>
		<tbody>
			{employees.map(employee => <Employee key={uuidv1()} data={employee} />)}
		</tbody>
	</table>
);

const mapStateToProps = state => {
	return {
		employees: state.shownEmployees.map(id => state.employees[id])
	};
};

export default connect(mapStateToProps)(EmployeesList);