import React from 'react';
import EmployeesList from './employees-list/EmployeesList';
import Filters from './filters/Filters';
import Sorters from './sorters/Sorters';
import { connect } from 'react-redux';
import { getEmployees } from '../../actions';

class MainPage extends React.Component {	

	componentDidMount() {
		this.props.getEmployees();
	}

	render() {
		let { loading } = this.props;
	return (
		<div>
			Main Page111
			{loading 
				? "Loading..." 
				: <section>
					<Filters />
					<Sorters />
					<EmployeesList />
				  </section>
			}			
		</div>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		loading: state.loading
	};
}

const mapDispatchToProps = (dispatch) => {
	let dis = dispatch;
	return {
		getEmployees: () => {dispatch(getEmployees()); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);