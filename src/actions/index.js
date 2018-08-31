import * as actionTypes from '../const/actionTypes';
import axios from 'axios';

export const load = () => {
	type: actionTypes.LOAD
}

export const getEmployees = () => {
	return dispatch => {
		dispatch({
			type: actionTypes.GET_EMPLOYEES_REQUEST
		});
		axios.get('/get-employees')
			.then(res => {
				dispatch({
					type: actionTypes.GET_EMPLOYEES_SUCCESS,
					employees: convertArrayToObject(JSON.parse(res.data.employees))
				});
			})
			.catch(err => {
				dispatch({
					type: actionTypes.GET_EMPLOYEES_FAILURE,
					message: err.message
				});
			});
	}
}

const convertArrayToObject = arr => {
	let result = {};
	for (let i = 0; i < arr.length; i++) {
		let id = arr[i].id;
		delete arr[i].id;
		result[id] = arr[i];
	}	
	return result;
};