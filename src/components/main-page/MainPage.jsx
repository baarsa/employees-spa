import React from 'react';
import EmployeesList from './employees-list/EmployeesList';
import Filters from './filters/Filters';
import Sorters from './sorters/Sorters';
import { Link } from 'react-router-dom';

const MainPage = () =>
	 (
		<div>
			<h1>Список сотрудников</h1>
				<Filters />
				<Sorters />
				<EmployeesList />
				<Link to="/employee/new">Добавить нового сотрудника</Link>								
		</div>
	);

export default MainPage;