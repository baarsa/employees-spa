import React from 'react';
import Employee from './employee/Employee';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

import styles from './EmployeesList.scss';

const EmployeesList = ({ employees }) =>  (	
	<section>
		<section className={styles.heading}>
			<div className={styles.headingCell}>имя</div>
			<div className={styles.headingCell}>должность</div>
			<div className={styles.headingCell}>телефон</div>
		</section>
		<ul className={styles.list}>				
			{employees.map(employee => <Employee key={uuidv1()} data={employee} />)}		
		</ul>
	</section>
	
);

const mapStateToProps = state => {
	return {
		employees: sort(filter(state.employees, state.filters), state.sort)		
	};
};

const filter = (arr, filters) => {	
	return arr.filter(item => {
		let match = true;
		Object.keys(filters).forEach(filter => {
			let filterValue = filters[filter];
			if (item[filter] !== filterValue) {
				match = false;
			}
		});		
		return match;
	});
};

const sort = (arr, sort) => {
	if (sort.field === "") {
		return arr;
	}
	const multiplier = sort.direction === "asc" ? 1 : -1;
	return arr.sort((a, b) => {
		return (a[sort.field] < b[sort.field] ? -1  : 1) * multiplier;
	});
};

export default connect(mapStateToProps)(EmployeesList);