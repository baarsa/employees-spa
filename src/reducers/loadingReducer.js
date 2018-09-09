import * as actions from '../const/actionTypes';

const initialState = true;

const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_EMPLOYEES_REQUEST:
			return true;
		case actions.GET_EMPLOYEES_SUCCESS:
		case actions.GET_EMPLOYEES_FAILURE:
			return false;
		default:
			return state;
	}
};

export default loadingReducer;