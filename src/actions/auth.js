import {  } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    payload: uid
});

export const logout = () => ({
    type: 'LOGOUT'
});