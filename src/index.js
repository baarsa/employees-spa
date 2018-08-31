import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './components/App';

render(
	<Provider store={configureStore()}>
		<App />
	</Provider>
	,
	document.getElementById('root')
);
/*

if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default;
		render(
			<NextApp store={store}/>,
			document.getElementById('root')
		);
	});
}
*/