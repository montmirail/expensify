import { addExpense, editExpense, removeExpense } from '../../src/actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense( '1324sdfasdf' );

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        payload: '1324sdfasdf'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense( '1324sdfasdf', { description: 'Description' } );

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1324sdfasdf',
        payload: {
            description: 'Description'
        }
    })
});

test('should setup add expense action object with provided values', () => {
    const expense = {
        description: 'Create action',
        note: 'This was a test',
        amount: 1522,
        created_at: 1000
    };

    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
            ...expense,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const empty_expense = {
        description: '',
        note: '',
        amount: 0,
        created_at: 0
    };

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        payload: {
            ...empty_expense,
            id: expect.any(String)
        }
    })
});