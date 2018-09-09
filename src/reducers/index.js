import * as actions from '../const/actionTypes';
import employeePage from './employeePageReducer';
import employees from './employeesReducer';
import error from './errorReducer';
import filters from './filtersReducer';
import loading from './loadingReducer';
import sort from './sortReducer';
import { combineReducers } from 'redux';

const initialState = {
	loading: true,
	error: "",
	employees: [],
	filters: {
		active: false,
		fields: {
			role: "cook",
			isArchive: true
		}
	},
	sort: {
		field: "name",
		direction: "asc"
	},
	employeePage: {
		showMessage: false,
		message: "",
		messageRedirect: ""
	}
};

const rootReducer = combineReducers({
	loading,
	error,
	employees,
	filters,
	sort,
	employeePage
});

/*

const rootReducer = (state = initialState, action) => {
	switch (action.type) {		
		case actions.GET_EMPLOYEES_REQUEST:
			return {...state, loading: true};
		case actions.GET_EMPLOYEES_SUCCESS:
			return {
				...state,
				 employees: action.employees,				 
				 loading: false
				};
		case actions.GET_EMPLOYEES_FAILURE:
			return {...state,
				loading: false,
			 	error: "Не удалось загрузить список сотрудников"};
		case actions.SAVE_EMPLOYEE_REQUEST:
			return {
					...state,
					employeePage: {
				 	showMessage: true,
				 	message: "Идет сохранение данных..."
				 }
				};
		case actions.SAVE_EMPLOYEE_SUCCESS:
			return {
				...state,
				 employees: state.employees.map(employee => {
				 	return employee.id === action.employee.id ? action.employee : employee;
				 }),
				 employeePage: {
				 	showMessage: true,
				 	message: "Данные сохранены",
				 	messageRedirect: "/"
				 }
				};
		case actions.SAVE_EMPLOYEE_FAILURE:
			return {
				...state, 
				employeePage: {
				 	showMessage: true,				 	
				 	message: "Произошла ошибка, данные не сохранены"
				 }
			};
		case actions.CREATE_EMPLOYEE_REQUEST:
			return {
					...state,
					employeePage: {
				 	showMessage: true,
				 	message: "Идет сохранение данных..."
				 }
				};
		case actions.CREATE_EMPLOYEE_SUCCESS:
			return {
				...state,
				 employees: [
				 	...state.employees,
				 	action.employee
				 ],
				 employeePage: {
				 	showMessage: true,
				 	message: "Данные сохранены",
				 	messageRedirect: "/"
				 }
				};
		case actions.CREATE_EMPLOYEE_FAILURE:
			return {
				...state, 
				employeePage: {
				 	showMessage: true,
				 	message: "Произошла ошибка, данные не сохранены"
				 }
			};
		case actions.SHOW_EMPLOYEE_PAGE_MESSAGE:
			return {
				...state,
				employeePage: {
					...state.employeePage,
					showMessage: true,
				 	message: action.message
				}
			}
		case actions.CLOSE_MESSAGE:
			return {
				...state,
				employeePage: {
					...state.employeePage,
					showMessage: false,
					messageRedirect: ""
				}
			}	
		
		default:
			return state;
	}
};
*/

export default rootReducer;