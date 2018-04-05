import moment from 'moment';

const defaultFilters = {
    text: '',
    sort_by: 'date',
    start_date: moment().startOf('month'),
    end_date: moment().endOf('month')
};

export default ( state = defaultFilters, action) => {
    switch ( action.type ) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.payload
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sort_by: action.payload
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sort_by: action.payload
            };
        case 'SET_START_DATE':
            return {
                ...state,
                start_date: action.payload
            };
        case 'SET_END_DATE':
            return {
                ...state,
                end_date: action.payload
            };
        default:
            return state;
    }
};
