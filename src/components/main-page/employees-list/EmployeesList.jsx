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
		employees: sort(filter(state.employees, state.filter), state.sort)		
	};
};

const filter = (arr, filter) => {
	if (filter.field === "") {
		return arr;
	}
	return arr.filter(item => item[filter.field].indexOf(filter.pattern) > -1);
};

const sort = (arr, sortField) => {
	if (sortField === "") {
		return arr;
	}
	return arr.sort((a, b) => {
		return a[sortField] < b[sortField] ? -1 : 1;
	});
};

export default connect(mapStateToProps)(EmployeesList);