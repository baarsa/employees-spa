import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';

export default function configureStore (history) {

	const store = createStore(
		connectRouter(history)(rootReducer),
		 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
		 compose(
		 	applyMiddleware(routerMiddleware(history), thunk)
		 )
	);

	if (module.hot) {
	    module.hot.accept('./reducers', () => {
	      const nextRootReducer = require('./reducers').default;
	      store.replaceReducer(nextRootReducer);
	    });
	 }

	 return store;

}