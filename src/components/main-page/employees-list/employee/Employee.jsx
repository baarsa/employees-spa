import React from 'react';
import { Link } from 'react-router-dom';
import roleNames from '../../../../const/roleNames';

const Employee = (props) => 
{
	let data = props.data;
	let { name, role, phone } = data;
return (		
		<Link to="/employee/1">
		<td>{ name }</td>
		<td>{ roleNames[role] }</td>
		<td>{ phone }</td>
		</Link>
	
)
}

export default Employee;