import React from 'react';
import { EditEmployeeComponent } from '../edit-employee/EditEmployee';
import { createEmployee, closeMessage, showEmployeePageMessage } from '../../../actions';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

class CreateEmployee extends EditEmployeeComponent {
	constructor(props) {
		super(props);
		this.state = {
			employee: {
				name: "",
				phone: "",
				birthday: "",
				role: "cook",
				isArchive: false
			},
			fieldsValid: {
				name: false,
				phone: false,
				birthday: false
			}	
		}; 
	}

	title = "Добавление нового сотрудника";
}

const mapStateToProps = (state) => {
	return {		
		messageVisible: state.employeePage.showMessage,
		message: state.employeePage.message,
		messageRedirect: state.employeePage.messageRedirect
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveEmployee: (employee) => {
			dispatch(createEmployee(employee));
		},
		closeMessage: (redirect) => {
			dispatch(closeMessage());
			if (redirect !== "") {
				dispatch(push(redirect));
			}
		},
		showMessage: (message) => {
			dispatch(showEmployeePageMessage(message));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);