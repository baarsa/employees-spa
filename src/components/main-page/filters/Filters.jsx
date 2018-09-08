import React from 'react';
import fieldNames from '../../../const/fieldNames';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');
import { filterEmployees, toggleFilters } from '../../../actions';
import roleNames from '../../../const/roleNames';
import cn from 'classnames';

import styles from './Filters.scss';

class Filters extends React.Component {
	onChange = () => {
		let { changeFilters, toggleFilters } = this.props;
		toggleFilters(true);
		changeFilters({
			role: this.roleSelect.value,
			isArchive: (this.archiveCheckbox.checked)
		});
	}

	onToggleActive = (e) => {
		this.props.toggleFilters(e.target.checked);
	}

	render () {		
		const roles = ["cook", "waiter", "driver"];
		let { filters } = this.props;
		let { role, isArchive } = filters.fields;
		
		return (
			<section className={cn(styles.root, {[styles.inactive]: !filters.active})}>
				<input 
					type="checkbox"
					checked={filters.active} 
					onChange={this.onToggleActive} />
				<label className={styles.mainLabel}>Фильтрация</label>
				<label className={styles.label}>Должность</label>
				<select 			
					className={styles.roleSelect}		
					value={role} 
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
					checked={isArchive}
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
		},
		toggleFilters: (active) => {
			dispatch(toggleFilters(active));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);