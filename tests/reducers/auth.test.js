import authReducer from '../../src/reducers/auth';

describe('Reducers: Auth', () => {

    test('should set uid for login', () => {
        const uid = 'abc123';
        const action = {
            type: 'LOGIN',
            payload: uid
        };

        const state = authReducer({}, action);

        expect(state).toEqual({ uid })
    });

    test('should clear uid for logout', () => {
        const action = {
            type: 'LOGOUT'
        };

        const state = authReducer({ uid: 'abc123'}, action);

        expect(state).toEqual({})
    });

});