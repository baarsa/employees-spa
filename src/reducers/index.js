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

export default rootReducer;