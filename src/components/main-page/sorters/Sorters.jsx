import React from 'react';
import fieldNames from '../../../const/fieldNames';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');
import { sortEmployees } from '../../../actions';

import styles from './Sorters.scss';

class Sorters extends React.Component {
	onChange = () => {
		let { changeSort } = this.props;
		changeSort(this.fieldSelect.value, this.directionSelect.value);
	}

	render () {		
		const fields = ["name", "birthday"];
		let { sort } = this.props;
		let { field: currentField, direction } = sort;
		return (
			<section className={styles.root}>
				Сортировка
				<select 
					value={currentField} 
					ref={node => {this.fieldSelect = node;}}
					onChange={this.onChange}>
					{fields.map(field => 
						<option 
							value={field} 						
							key={uuidv1()}>{fieldNames[field]}
						</option>
						)}
				</select>
				<select 
					value={direction} 
					ref={node => {this.directionSelect = node;}}
					onChange={this.onChange}>
					<option value="asc">по возрастанию</option>
					<option value="desc">по убыванию</option>
				</select>
			</section>
		)
	}
};

const mapStateToProps = state => {
	return {
		sort: state.sort
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeSort: (field, direction) => {
			dispatch(sortEmployees(field, direction));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorters);