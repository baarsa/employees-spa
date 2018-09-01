import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditEmployee from './edit-employee/EditEmployee';

const EmployeePage = ({match}) => (
	<Switch>
		<Route 
			path={`${match.path}/:id`} 
			render={(props) => (<EditEmployee id={props.match.params.id} />)} 
			/>		
	</Switch>
)

export default EmployeePage;