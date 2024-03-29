import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/Reactotron';

import history from './services/history';
import store from './store';
import Routes from './routes';

import GlobalStyle from './styles/global';
import Header from './components/Header';

export default function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <Header />
                <Routes />
                <ToastContainer autoClose={3000} />
            </Router>
        </Provider>
    )
}