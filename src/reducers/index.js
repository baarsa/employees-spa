import * as actions from '../const/actionTypes';

const initialState = {
	loading: false,
	error: "",
	employees: [],
	filters: {
		role: "cook",
		isArchive: true
	},
	sort: {
		field: "name",
		direction: "asc"
	}
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
			return {...state, loading: false};
		case actions.FILTER_EMPLOYEES:
			return {...state, filters: {
				...state.filters,
				role: action.filters.role,
				isArchive: action.filters.isArchive
			}};
		case actions.SORT_EMPLOYEES:
			return {...state, sort: {
				...state.sort,
				field: action.field,
				direction: action.direction
			}};
		default:
			return state;
	}
};

export default rootReducer;