import React from 'react';
import roleNames from '../../../../const/roleNames';

const Employee = (props) => 
{
	let data = props.data;
	let { name, role, phone } = data;
return (
	<tr>
		<td>{ name }</td>
		<td>{ roleNames[role] }</td>
		<td>{ phone }</td>
	</tr>
)
}

export default Employee;