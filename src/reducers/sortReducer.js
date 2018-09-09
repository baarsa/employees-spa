import * as actions from '../const/actionTypes';

const initialState = {
	field: "name",
	direction: "asc"
}

const sortReducer = (sortState = initialState, action) => {
	switch(action.type) {
		case actions.SORT_EMPLOYEES:
			return {
				...sortState,
				field: action.field,
				direction: action.direction
			};
		default:
			return sortState;
	}
}

export default sortReducer;