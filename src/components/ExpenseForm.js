import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class ExpenseForm extends Component {

    constructor(props) {
        super(props);

        const { expense } = props;

        this.state = {
            description: expense ? expense.description : '',
            note: expense ? expense.note : '',
            amount: expense ? ( expense.amount / 100 ).toString() : '',
            created_at: expense ? moment(expense.created_at) : moment(),
            calendar_focused: false,
            error: ''
        };
    }

    onChange = (e) => {
        const { target } = e;

        this.setState(() => ({
            [target.name]: target.value
        }))
    };

    onAmountChange = (e) => {
        const amount = e.target.value;

        if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({
                amount
            }))
        }
    };

    onDateChange = (date) => {
        if (date) {
            this.setState(() => ({ created_at: date }))
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendar_focused: focused
        }))
    };

    onSubmit = (e) => {
        e.preventDefault();

        if( !this.state.description || !this.state.amount ) {
            this.setState(() => ({ error: 'Please provide a description and an amount.'}));
        } else {
            this.setState(() => ({ error: ''}));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                created_at: this.state.created_at.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {

        const {
            onChange,
            onAmountChange,
            onDateChange,
            onFocusChange,
            onSubmit,
            state: {
                description,
                note,
                amount,
                created_at,
                calendar_focused,
                error
            }
        } = this;

        return(
            <div>
                { error && <p>{error}</p> }
                <form onSubmit={onSubmit}>

                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={description}
                        onChange={onChange}
                        name="description"
                    />

                    <input
                        type="text"
                        placeholder="Amount"
                        value={amount}
                        onChange={onAmountChange}
                    />

                    <SingleDatePicker
                        date={created_at}
                        onDateChange={onDateChange}
                        focused={calendar_focused}
                        onFocusChange={onFocusChange}
                        isOutsideRange={ day => false}
                    />

                    <textarea
                        placeholder="Add a note for this expense(optional)"
                        value={note}
                        onChange={onChange}
                        name="note"
                    />

                    <button>Add expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;