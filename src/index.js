import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as ReduxProvider } from "react-redux";
import { Auth0Provider } from './contexts/auth0-context';
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
	<Auth0Provider>
		<ReduxProvider store={reduxStore}>
			<App />
		</ReduxProvider>
	</Auth0Provider>
	, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
