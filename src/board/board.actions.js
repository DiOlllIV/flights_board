import { fetchFlightsList } from './board.gateway';
import { boardListSelector } from './board.selectors';

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
        type: DEPARTURE_LIST_RECEIVED,
        payload: {
            arrival,
        },
    };
    
    return action;
};