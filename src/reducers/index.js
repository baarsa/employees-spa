import * as actions from '../const/actionTypes';

const initialState = {
	loading: true,
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
	shownEmployees: [1, 2]
};

const rootReducer = (state = initialState, action) => {
	switch (action) {
		case actions.LOAD:
			return {...state, loading: false};
		case action.GET_EMPLOYEES_REQUEST:
		default:
			return state;
	}
};

export default rootReducer;