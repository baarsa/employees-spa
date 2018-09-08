import React from 'react';
import { Link } from 'react-router-dom';
import roleNames from '../../../../const/roleNames';
import styles from './Employee.scss';

const Employee = (props) => 
{
	let data = props.data;
	let { name, role, phone, id, birthday } = data;
return (	
		<li className={styles.root}>	
			<Link to={`/employee/${id}`} className={styles.link}>
				<div className={styles.cell}>{ name }</div>
				<div className={styles.cell}>{ roleNames[role] }</div>
				<div className={styles.cell}>{ phone }</div>
				<div className={styles.cell}>{ birthday }</div>
			</Link>
		</li>
	
	)
}

export default Employee;