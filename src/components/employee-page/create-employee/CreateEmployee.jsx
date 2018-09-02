import React from 'react';
import { EditEmployeeComponent } from '../edit-employee/EditEmployee';
import { createEmployee, closeMessage, showEmployeePageMessage } from '../../../actions';
import { connect } from 'react-redux';

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
		showMessage: state.employeePage.showMessage,
		message: state.employeePage.message
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveEmployee: (employee) => {
			dispatch(createEmployee(employee));
		},
		closeMessage: () => {
			dispatch(closeMessage());
		},
		showMessage: (message) => {
			dispatch(showEmployeePageMessage(message));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);