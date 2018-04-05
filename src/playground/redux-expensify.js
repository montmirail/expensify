

store.subscribe(() => {
    const { expenses, filters } = store.getState();
    const visibleExpenses = getVisibleExpenses( expenses, filters );
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    note: 'Tea',
    amount: 85,
    created_at: 600
})).payload;

const expenseTwo = store.dispatch(addExpense({
    description: 'Rent',
    amount: 200,
    created_at: 850
})).payload;


store.dispatch(addExpense({
    note: 'Coffee',
    amount: 300,
    created_at: 200
}));



store.dispatch(sortByAmount());
store.dispatch(sortByDate());

const demoState = {
    expenses: [{
        id: 'sdfsadf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 84500,
        created_at: new Date()
    }],
    filters: {
        text: 'rent',
        sort_by: 'amount',
        start_date: undefined,
        end_date: undefined
    }
};