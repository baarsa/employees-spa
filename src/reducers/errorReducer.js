import * as actions from '../const/actionTypes';

const initialState = "";

const errorReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.GET_EMPLOYEES_FAILURE:
			return "Не удалось загрузить список сотрудников";
		default:
			return state;
	}
}

export default errorReducer;