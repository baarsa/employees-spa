import React from 'react';
import InputMask from 'react-input-mask';
import fieldNames from '../../../const/fieldNames';
import roleNames from '../../../const/roleNames';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

class EditEmployee extends React.Component {
	constructor(props) {
		super(props);
		this.state = props.employee;		
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render () {
		let { name, phone, birthday, role, isArchive } = this.state;
		let roles = ["cook", "waiter", "driver"];
		return (
			<section>
				Edit Employee
				<label>{fieldNames["name"]}</label>
				<input 
					name="name" 
					value={ name }
					onChange={this.onChange}
				/>
				<label>{fieldNames["phone"]}</label>
				<InputMask 
					name="phone"
					mask="+7 (999) 999-9999" 
					value={phone} 
					onChange={this.onChange} 
				/>
				<label>{fieldNames["birthday"]}</label>
				<InputMask 
					name="birthday"
					mask="99.99.9999" 
					value={birthday}
					onChange={this.onChange} 
				/>
				<label>Должность</label>
				<select 
					name="role"
					value={role}
					onChange={this.onChange} 
				>
					{roles.map(role => (
						<option key={uuidv1()} value={role}>
							{roleNames[role]}
						</option>))}
				</select>
				<label>В архиве</label>
				<input
					name="isArchive"
					type="checkbox"
					checked={isArchive}
					onChange={this.onChange} 
				/>
				<button>Сохранить изменения</button>
			</section>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		employee: state.employees.filter(employee => employee.id === +ownProps.id)[0]
	};
};

export default connect(mapStateToProps)(EditEmployee);