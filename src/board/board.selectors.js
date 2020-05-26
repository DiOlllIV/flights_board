import { createSelector } from 'reselect';

export const boardListSelector = state => 
    state.board.flightsList;

export const boardArrivalClick = state =>
    state.board.arrivalClick;

export const boardDepartureClick = state =>
    state.board.departureClick;

export const filterTextSelector = state => 
    state.board.filterText;

export const filteredFlightsSelector = createSelector(
    [boardListSelector, filterTextSelector],
    (flightsList, filterText) => 
        flightsList.filter(item => {
            return item.flight.toLowerCase()
                .includes(filterText.toLowerCase()) || 
            item.airlineName.toLowerCase()
                .includes(filterText.toLowerCase()) || 
            item.destination.toLowerCase()
                .includes(filterText.toLowerCase());
        })
)