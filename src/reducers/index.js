import * as actions from '../const/actionTypes';

const initialState = {
	loading: true
};

const rootReducer = (state = initialState, action) => {
	switch (action) {
		case actions.LOAD:
			return {...state, loading: false};
		default:
			return state;
	}
};

export default rootReducer;