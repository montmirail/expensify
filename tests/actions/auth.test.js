import { login, logout } from '../../src/actions/auth';

describe('Actions: Auth', () => {

    test('should setup login action', () => {
        const uid = '123abc';
        const action = login( uid );

        expect(action).toEqual({
            type: 'LOGIN',
            payload: uid
        })
    });

    test('should setup logout action', () => {
        const action = logout();

        expect(action).toEqual({
            type: 'LOGOUT'
        })
    });
});