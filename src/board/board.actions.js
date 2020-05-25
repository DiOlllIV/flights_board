import { fetchFlightsList } from './board.gateway';

export const DEPARTURE_LIST_RECEIVED = 'BOARD/DEPARTURE_LIST_RECEIVED';
export const ARRIVAL_LIST_RECEVEID = 'BOARD/ARRIVAL_LIST_RECEVEID';

export const departureListReceived = departure => {
    const action = {
        type: DEPARTURE_LIST_RECEIVED,
        payload: {
            departure,
        },
    };

    return action;
};

export const arrivalListReceived = arrival => {
    const action = {
        type: ARRIVAL_LIST_RECEVEID,
        payload: {
            arrival,
        },
    };
    
    return action;
};

export const getArrivalList = () => {
    const thunkAction = function(dispatch) {
        fetchFlightsList()
            .then(data => 
                dispatch(arrivalListReceived(data.body.arrival)));
    };

    return thunkAction;
};

export const getDepartureList = () => {
    const thunkAction = function(dispatch) {
        fetchFlightsList()
            .then(data => 
                dispatch(departureListReceived(data.body.departure)));
    };

    return thunkAction;
};