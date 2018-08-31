import * as actions from '../const/actionTypes';

const initialState = {
	loading: false,
	error: "",
	employees: {
		1: {
    "id": 1,
    "name": "Илья Емяsнов",
    "isArchive": false,
    "role": "driver",
    "phone": "+7 (883) 508-3269",
    "birthday": "12.02.1982"
  },
  	2:{
    "id": 2,
    "name": "Александр Ларионов",
    "isArchive": true,
    "role": "waiter",
    "phone": "+7 (823) 440-3602",
    "birthday": "26.01.1986"
  },
	},
	shownEmployees: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.LOAD:
			return {...state, loading: false};
		case actions.GET_EMPLOYEES_REQUEST:
			return {...state, loading: true};
		case actions.GET_EMPLOYEES_SUCCESS:
			return {
				...state,
				 employees: action.employees,
				 shownEmployees: Object.keys(action.employees),
				 loading: false
				};
		case actions.GET_EMPLOYEES_FAILURE:
			return {...state, employees: action.employees, loading: false};
		default:
			return state;
	}
};

export default rootReducer;