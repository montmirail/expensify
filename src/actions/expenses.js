import uuid from 'uuid';

export const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        created_at = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    payload: {
        id: uuid(),
        description,
        note,
        amount,
        created_at
    }
});

export const removeExpense = ( id = '' ) => ({
    type: 'REMOVE_EXPENSE',
    payload: id
});

export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    payload: updates
});