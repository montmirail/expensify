import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../src/actions/filters';

test('should setup set start date action object', () => {
    const action = setStartDate( moment(0));

    expect(action).toEqual({
        type: 'SET_START_DATE',
        payload: moment(0)
    })
});

test('should setup set end date action object', () => {
    const action = setEndDate( moment(0));

    expect(action).toEqual({
        type: 'SET_END_DATE',
        payload: moment(0)
    })
});

test('should setup set text filer action object with text value', () => {
    const text = 'test filter';
    const action = setTextFilter(text);

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: text
    })
});

test('should setup set text filer action object with default value', () => {
    const action = setTextFilter();

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        payload: ''
    })
});

test('should setup sort by date action object', () => {
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
        payload: 'date'
    })
});

test('should setup sort by amount action object', () => {
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
        payload: 'amount'
    })
});