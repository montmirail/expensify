export const setTextFilter = ( filter = '' ) => ({
    type: 'SET_TEXT_FILTER',
    payload: filter
});

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
    payload: 'amount'
});

export const sortByDate = () => ({
    type: 'SORT_BY_DATE',
    payload: 'date'
});

export const setStartDate = ( date = undefined) => ({
    type: 'SET_START_DATE',
    payload: date
});

export const setEndDate = ( date = undefined) => ({
    type: 'SET_END_DATE',
    payload: date
});