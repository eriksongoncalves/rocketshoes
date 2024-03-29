import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
import store from './store';
import Routes from './routes';


const App = () => {
	return (
		<Provider store={store}>
			<StatusBar barStyle="light-content" />
			<Routes />
		</Provider>
	);
}

export default App;
