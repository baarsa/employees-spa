import * as actions from '../const/actionTypes';

const initialState = {
	showMessage: false,
	message: "",
	messageRedirect: ""
}

const employeePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.SAVE_EMPLOYEE_REQUEST:
		case actions.CREATE_EMPLOYEE_REQUEST:
			return {
					...state,
				 	showMessage: true,
				 	message: "Идет сохранение данных..."
				};
		case actions.SAVE_EMPLOYEE_SUCCESS:
		case actions.CREATE_EMPLOYEE_SUCCESS:
			return {
					...state,
				 	showMessage: true,
				 	message: "Данные сохранены",
				 	messageRedirect: "/"
				 };
		case actions.SAVE_EMPLOYEE_FAILURE:
		case actions.CREATE_EMPLOYEE_FAILURE:
			return {
					...state,
				 	showMessage: true,				 	
				 	message: "Произошла ошибка, данные не сохранены"
				};
		case actions.SHOW_EMPLOYEE_PAGE_MESSAGE:
			return {
					...state,
					showMessage: true,
				 	message: action.message
				};
		case actions.CLOSE_MESSAGE:
			return {
					...state,
					showMessage: false,
					messageRedirect: ""
				};
		default:
			return state;
	}
}

export default employeePageReducer;