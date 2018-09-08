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
			<div className={styles.headingCell}>дата рождения</div>
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
	let { active, fields } = filters;
	if (!active) {
		return arr;
	}
	return arr.filter(item => {
		let match = true;
		Object.keys(fields).forEach(filter => {
			let filterValue = fields[filter];
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
		return compare(sort.field, a[sort.field], b[sort.field]) * multiplier;
	});
};

const compare = (field, a, b) => {
	if (field === "birthday") {
		let [day_a, month_a, year_a] = a.split('.');
		let [day_b, month_b, year_b] = b.split('.');
		if (year_a < year_b) {
			return -1;
		}
		if (year_a > year_b) {
			return 1;
		}
		if (month_a < month_b) {
			return -1;
		}
		if (month_a > month_b) {
			return 1;
		}
		return day_a < day_b ? - 1 : 1;
	}
	return a < b ? - 1 : 1;
}

export default connect(mapStateToProps)(EmployeesList);