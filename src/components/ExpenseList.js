import React from 'react';
import { connect } from 'react-redux';

// ----- components -----
import ExpenseListItem from './ExpenseListItem';

// ----- selectors -----
import selectExpenses from '../selectors/expenses';

export const ExpenseList = ({ expenses }) => (
    <div>
        <h1>Expense List</h1>
        {
            expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                expenses.map((expense, key) => (
                    <ExpenseListItem
                        key={key}
                        {...expense}
                    />
                ))
            )
        }
    </div>
);

ExpenseList.defaultProps = {
    expenses: []
};

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: selectExpenses(expenses, filters)
});

export default connect( mapStateToProps )(ExpenseList);