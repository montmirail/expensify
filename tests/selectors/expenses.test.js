import selectExpenses from '../../src/selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id: '8',
        description: 'Gum',
        note: '',
        amount: 195,
        created_at: 0
    },
    {
        id: '8',
        description: 'Rent',
        note: '',
        amount: 225,
        created_at: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '8',
        description: 'Credit Card',
        note: '',
        amount: 25,
        created_at: moment(0).add(4, 'days').valueOf()
    }
];

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sort_by: 'date',
        start_date: undefined,
        end_date: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[1]
    ])
});

test('should filter by start date', () => {
    const filters = {
        text: '',
        sort_by: 'date',
        start_date: moment(0),
        end_date: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])
});

test('should filter by end date', () => {
    const filters = {
        text: '',
        sort_by: 'date',
        start_date: undefined,
        end_date: moment(0).subtract(1, 'days')
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[1]
    ])
});

test('should sort by date', () => {
    const filters = {
        text: '',
        sort_by: 'date',
        start_date: undefined,
        end_date: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ])
});

test('should sort by amount', () => {
    const filters = {
        text: '',
        sort_by: 'amount',
        start_date: undefined,
        end_date: undefined
    };

    const result = selectExpenses(expenses, filters);

    expect(result).toEqual([
        expenses[1],
        expenses[0],
        expenses[2]
    ])
});