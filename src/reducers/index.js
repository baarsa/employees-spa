import * as actions from '../const/actionTypes';

const initialState = {
	loading: false,
	error: "",
	employees: [],
	filter: {
		field: "",
		pattern: ""
	},
	sort: "name"
};

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
			return {...state, employees: action.employees, loading: false};
		case actions.SORT_EMPLOYEES:

		default:
			return state;
	}
};

export default rootReducer;