import React from 'react';

const Employee = (props) => 
{
	let data = props.data;
	let { name, role, phone } = data;
return (
	<tr>
		<td>{ name }</td>
		<td>{ role }</td>
		<td>{ phone }</td>
	</tr>
)
}

export default Employee;