import React from 'react';
import { connect } from 'react-redux';

// ----- components -----
import ExpenseForm from './ExpenseForm';

// ----- actions -----
import  { addExpense } from '../actions/expenses';

const Create = ({ dispatch, history }) => (
    <div>
        This is from create expense
        <ExpenseForm
            onSubmit={ (expense) => {
                dispatch(addExpense(expense));
                history.push('/overview');
            }}
        />
    </div>
);

export default connect()(Create);