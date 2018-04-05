import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

// ----- actions -----
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends Component {

    state = {
        calendar_focused: null
    };

    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = ( calendar_focused ) => {
        this.setState(() => ({ calendar_focused }));
    };

    render() {
        const {
            onDatesChange,
            onFocusChange,
            state: {
                calendar_focused
            },
            props: {
                filters,
                dispatch
            }
        } = this;

        return(
            <div>
                <input
                    type="text"
                    value={filters.text}
                    onChange={e => dispatch(setTextFilter(e.target.value))}
                />

                <select
                    value={filters.sort_by}
                    onChange={e => e.target.value === 'date' ? dispatch(sortByDate()) : dispatch(sortByAmount())}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker
                    startDate={filters.start_date}
                    endDate={filters.end_date}
                    onDatesChange={onDatesChange}
                    focusedInput={calendar_focused}
                    onFocusChange={onFocusChange}
                    showClearDates={true}
                    numberOfMonth={1}
                    isOutsideRange={ () => false }
                />

            </div>
        )
    }
};

ExpenseListFilters.defaultProps = {
    filters: {}
};

const mapStateToProps = ({ filters }) => ({
    filters
});

export default connect(mapStateToProps)(ExpenseListFilters);