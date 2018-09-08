import React from 'react';
import { render } from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './components/App';

const history = createBrowserHistory();

render(
	<Provider store={configureStore(history)}>
		<App history={history} />
	</Provider>
	,
	document.getElementById('root')
);


if (module.hot) {
	module.hot.accept('./components/App', () => {
		const NextApp = require('./components/App').default;
		render(
			<Provider store={configureStore()}>
				<NextApp />
			</Provider>,
			document.getElementById('root')
		);
	});
}
