import * as actions from '../const/actionTypes';

const initialState = [];

const employeesReducer = (employeesState = initialState, action) => {
	switch (action.type) {
		case actions.GET_EMPLOYEES_SUCCESS:
			return action.employees;
		case actions.SAVE_EMPLOYEE_SUCCESS:
			return employeesState.map(employee => {
				 	return employee.id === action.employee.id ? action.employee : employee;
			});
		case actions.CREATE_EMPLOYEE_SUCCESS:
			return [...employeesState, action.employee];
		default:
			return employeesState;		
	}
}

export default employeesReducer;