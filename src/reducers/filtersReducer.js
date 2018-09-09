import * as actions from '../const/actionTypes';

const initialState = {
	active: false,
	fields: {
		role: "cook",
		isArchive: true
	}
};

const filtersReducer = (filtersState = initialState, action) => {
	switch(action.type) {
		case actions.FILTER_EMPLOYEES:
			return {
				...filtersState,
				fields: {
					role: action.filters.role,
					isArchive: action.filters.isArchive
				}
			};
		case actions.TOGGLE_FILTERS:
			return  {
					...filtersState,
					active: action.active
			};
		default:
			return filtersState;
	}
}

export default filtersReducer;