import * as actionTypes from '../const/actionTypes';
import axios from 'axios';

export const load = () => {
	type: actionTypes.LOAD
}

export const getEmployees = (dispatch) => {
	dispatch({
		type: actionTypes.GET_EMPLOYEES_REQUEST
	});
	axios.get('/get-employees')
		.then(res => {
			dispatch({
				type: actionTypes.GET_EMPLOYEES_SUCCESS,
				employees: res.employees
			});
		})
		.catch(err => {
			dispatch({
				type: actionTypes.GET_EMPLOYEES_FAILURE,
				message: err.message
			});
		});
}