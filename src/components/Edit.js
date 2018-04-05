import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

// ----- actions -----
import { editExpense, removeExpense} from '../actions/expenses';

const Edit = ({ expense, dispatch, history }) => {
    return (
        <div>
            <ExpenseForm
                expense={expense}
                onSubmit={ updates => {
                    dispatch(editExpense(expense.id, updates));
                    history.push('/overview');
                }}
            />
            <button onClick={() => {
                dispatch(removeExpense(expense.id));
                history.push('/overview');
            }} >
                Remove
            </button>
        </div>
    );
};

const mapStateToProps = (state, props ) => ({
    expense: state.expenses.find( expense =>
        expense.id === props.match.params.id
    )
});

export default connect( mapStateToProps )(Edit);