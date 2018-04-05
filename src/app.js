import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'react-dates/initialize';

// ----- store -----
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';

// ----- style -----
import 'normalize.css/normalize.css';
import './styles/index.scss';
import 'react-dates/lib/css/_datepicker.css';

// ----- router -----
import Router from './router';

// ----- firebase -----
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <Router />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

renderApp();

firebase.auth().onAuthStateChanged( user => {
    if(user) {
        store.dispatch(login(user.uid));
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});