import React from 'react';
import InputMask from 'react-input-mask';
import fieldNames from '../../../const/fieldNames';
import roleNames from '../../../const/roleNames';
import { saveEmployee, closeMessage, showEmployeePageMessage } from '../../../actions';
import { connect } from 'react-redux';
import cn from 'classnames';
const uuidv1 = require('uuid/v1');

import styles from './EditEmployee.scss';

class EditEmployee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: props.employee,
			fieldsValid: {
				name: true,
				phone: true,
				birthday: true
			}	
		}; 
	}

	title = "Редактирование данных сотрудника";

	onChange = (e) => {
		let value = (e.target.name === "isArchive" 
			? e.target.checked
			: e.target.value);
		this.setState({
			employee: {
				...this.state.employee,
				[e.target.name]: value
			},
			fieldsValid: {
				...this.state.fieldsValid,
				[e.target.name]: this.isValueValid(e.target.name, e.target.value)
			}
		});
	}

	handleSaveClick = () => {				
		if (this.allFieldsValid()) {
			this.props.saveEmployee(this.state.employee);
		} else {
			this.props.showMessage("Проверьте правильность введенных данных");
		}
	}	

	allFieldsValid = () => {
		let valid = true;
		Object.keys(this.state.fieldsValid).forEach(key => {
			if (!this.state.fieldsValid[key]) {
				valid = false;
			}
		});
		return valid;
	}

	isValueValid = (name, value) => {
		switch (name) {
			case 'name':
				return /^[\sА-Яа-я]{3,}$/.test(value);
			case 'phone':
				return /^\+7 \([\d]{3}\) [\d]{3}-[\d]{4}$/.test(value);
			case 'birthday':
				return /^[\d]{2}\.[\d]{2}\.[\d]{4}$/.test(value);
			default:
				return true;
		}		
	}

	render () {
		let { name, phone, birthday, role, isArchive } = this.state.employee;
		let { messageVisible, message } = this.props;
		let roles = ["cook", "waiter", "driver"];
		return (
			<section>
				{ messageVisible 
					&& <section className={styles.message} onClick={this.props.closeMessage}>
						{ message }
					</section> }
				<h1 className={styles.title}>{this.title}</h1>
				<section className={styles.formRow}>
					<label className={styles.label}>{fieldNames["name"]}</label>
					<div className={styles.inputWrapper}>
						<input 
							className={cn(styles.input,
							 {[styles.inputInvalid]: !this.state.fieldsValid["name"]})}
							name="name" 
							value={ name }
							onChange={this.onChange}
						/>
					</div>
				</section>
				<section className={styles.formRow}>
					<label className={styles.label}>{fieldNames["phone"]}</label>
					<div className={styles.inputWrapper}>
						<InputMask 
							className={cn(styles.input,
							 {[styles.inputInvalid]: !this.state.fieldsValid["phone"]})}
							name="phone"
							mask="+7 (999) 999-9999" 
							value={phone} 
							onChange={this.onChange} 
						/>
					</div>
				</section>
				<section className={styles.formRow}>
					<label className={styles.label}>{fieldNames["birthday"]}</label>
					<div className={styles.inputWrapper}>
						<InputMask 
							className={cn(styles.input,
							 {[styles.inputInvalid]: !this.state.fieldsValid["birthday"]})}
							name="birthday"
							mask="99.99.9999" 
							value={birthday}
							onChange={this.onChange} 
						/>
					</div>
				</section>
				<section className={styles.formRow}>
					<label className={styles.label}>Должность</label>
					<div className={styles.inputWrapper}>
						<select 
							className={styles.input}
							name="role"
							value={role}
							onChange={this.onChange} 
						>
							{roles.map(role => (
								<option key={uuidv1()} value={role}>
									{roleNames[role]}
								</option>))}
						</select>
					</div>
				</section>
				<section className={styles.formRow}>
					<label className={styles.label}>В архиве</label>
					<div className={styles.inputWrapper}>
						<input
							name="isArchive"
							type="checkbox"
							checked={isArchive}
							onChange={this.onChange} 
						/>
					</div>
				</section>
				<section className={styles.formRow}>
					<button 
						className={styles.submit}
						onClick={this.handleSaveClick}>
						 Сохранить изменения
					</button>
				</section>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		employee: state.employees.filter(employee => employee.id === +ownProps.id)[0],
		messageVisible: state.employeePage.showMessage,
		message: state.employeePage.message
	};
};

const mapDispatchToProps = dispatch => {
	return {
		saveEmployee: (employee) => {
			dispatch(saveEmployee(employee));
		},
		closeMessage: () => {
			dispatch(closeMessage());
		},
		showMessage: (message) => {
			dispatch(showEmployeePageMessage(message));
		}
	};
};

export { EditEmployee as EditEmployeeComponent };

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);