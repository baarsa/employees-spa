import React from 'react';
import fieldNames from '../../../const/fieldNames';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');
import { filterEmployees } from '../../../actions';
import roleNames from '../../../const/roleNames';

import styles from './Filters.scss';

class Filters extends React.Component {
	onChange = () => {
		let { changeFilters } = this.props;
		changeFilters({
			role: this.roleSelect.value,
			isArchive: (this.archiveCheckbox.checked)
		});
	}

	render () {		
		const roles = ["cook", "waiter", "driver"];
		let { filters } = this.props;
		let roleValue = filters.role;
		let inArchive = filters.inArchive;
		return (
			<section className={styles.root}>
				<label className={styles.mainLabel}>Фильтрация</label>
				<label className={styles.label}>Должность</label>
				<select 					
					value={roleValue} 
					ref={node => {this.roleSelect = node;}}
					onChange={this.onChange}>
					{roles.map(role => 
						<option key={uuidv1()} value={role}>
							{roleNames[role]}
						</option>)}
				</select>
				<label className={styles.label}>В архиве</label>
				<input 
					type="checkbox" 
					checked={inArchive}
					ref={node => {this.archiveCheckbox = node;}}
					onChange={this.onChange}
				 />
			</section>
		)
	}
};

const mapStateToProps = state => {
	return {
		filters: state.filters
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeFilters: (filters) => {
			dispatch(filterEmployees(filters));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);