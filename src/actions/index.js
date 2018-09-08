import * as actionTypes from '../const/actionTypes';
import axios from 'axios';

export const getEmployees = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_EMPLOYEES_REQUEST
		});
		axios.get('/get-employees')
			.then(res => {
				dispatch({
					type: actionTypes.GET_EMPLOYEES_SUCCESS,
					employees:JSON.parse(res.data.employees)
				});
			})
			.catch(err => {
				dispatch({
					type: actionTypes.GET_EMPLOYEES_FAILURE,
					message: err.message
				});
			});
	};
};

export const saveEmployee = (employee) => {
	return dispatch => {
		dispatch({
			type: actionTypes.SAVE_EMPLOYEE_REQUEST
		});
		axios.post('/save-employee', {
			employee: JSON.stringify(employee)
		})
			.then(res => {
				dispatch({
					type: actionTypes.SAVE_EMPLOYEE_SUCCESS,
					employee
				});
			})
			.catch(err => {
				dispatch({
					type: actionTypes.SAVE_EMPLOYEE_FAILURE,
					message: err.message
				});
			});
	};
};

export const createEmployee = (employee) => {
	return dispatch => {
		dispatch({
			type: actionTypes.CREATE_EMPLOYEE_REQUEST
		});
		axios.post('/create-employee', {
			employee: JSON.stringify(employee)
		})
			.then(res => {
				dispatch({
					type: actionTypes.CREATE_EMPLOYEE_SUCCESS,
					employee: {
						...employee,
						id: res.data.id
					}
				});
			})
			.catch(err => {
				dispatch({
					type: actionTypes.CREATE_EMPLOYEE_FAILURE,
					message: err.message
				});
			});
	};
};

export const showEmployeePageMessage = (message) => {
	return {
		type: actionTypes.SHOW_EMPLOYEE_PAGE_MESSAGE,
		message
	};
};

export const closeMessage = () => {
	return {
		type: actionTypes.CLOSE_MESSAGE
	};
};

export const sortEmployees = (field, direction) => {
	return {
		type: actionTypes.SORT_EMPLOYEES,
		field,
		direction
	};
};

export const filterEmployees = (filters) => {
	return {
		type: actionTypes.FILTER_EMPLOYEES,
		filters
	};
};

export const toggleFilters = (active) => {
	return {
		type: actionTypes.TOGGLE_FILTERS,
		active
	};
};

const convertArrayToObject = arr => {
	let result = {};
	for (let i = 0; i < arr.length; i++) {
		let id = arr[i].id;
		delete arr[i].id;
		result[id] = arr[i];
	}	
	return result;
};