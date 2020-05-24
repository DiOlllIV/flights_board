import { DEPARTURE_LIST_RECEIVED } from './board.actions';
import { ARRIVAL_LIST_RECEVEID } from './board.actions';


const initialState = {
    arrivals: [],
    departures: [],
};

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPARTURE_LIST_RECEIVED: {
            return {
                ...state,
                departures: action.payload.departures,
            };
        }

        case ARRIVAL_LIST_RECEVEID: {
            return {
                ...state,
                arrivals: action.payload.arrivals,
            };
        }

        default:
            return state;
    }
};

export default boardReducer;