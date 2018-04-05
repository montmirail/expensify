import React from 'react';

// ----- components -----
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Overview = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Overview;