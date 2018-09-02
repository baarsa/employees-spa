import React from 'react';
import { Route, Switch } from 'react-router-dom';
import EditEmployee from './edit-employee/EditEmployee';
import CreateEmployee from './create-employee/CreateEmployee';

const EmployeePage = ({match}) => (
	<Switch>
		<Route 
			path={`${match.path}/new`} 
			render={(props) => (<CreateEmployee />)} 
		/>	
		<Route 
			path={`${match.path}/:id`} 
			render={(props) => (<EditEmployee id={props.match.params.id} />)} 
		/>		
	</Switch>
)

export default EmployeePage;