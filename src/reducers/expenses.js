export default ( state = [], action) => {
    switch ( action.type ) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.payload
            ];
        case 'REMOVE_EXPENSE':
            return state.filter( el => el.id !== action.payload );
        case 'EDIT_EXPENSE':
            return state.map( expense => {
                if( expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.payload
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};