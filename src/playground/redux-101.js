import { createStore } from 'redux';

const incrementCount = ( payload) => ({
    type: 'INCREMENT',
    payload
});

const store = createStore( (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const increment_by = typeof action.payload === 'number' ? action.payload : 1;
            return {
                count: state.count + increment_by
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state
    }
});


const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount( 5 ));

store.dispatch({
    type: 'RESET'
});
