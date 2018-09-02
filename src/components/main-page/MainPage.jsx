import React from 'react';
import EmployeesList from './employees-list/EmployeesList';
import Filters from './filters/Filters';
import Sorters from './sorters/Sorters';
import { Link } from 'react-router-dom';

import styles from './MainPage.scss';

const MainPage = () =>
	 (
		<section className={styles.root}>
			<h1 className={styles.title}>Список сотрудников</h1>
				<Filters />
				<Sorters />
				<EmployeesList />
				<Link to="/employee/new">Добавить нового сотрудника</Link>								
		</section>
	);

export default MainPage;