import { DEPARTURE_LIST_RECEIVED } from './board.actions';
import { ARRIVAL_LIST_RECEVEID } from './board.actions';


const initialState = {
    flightsList: [],
};

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPARTURE_LIST_RECEIVED: {
            return {
                ...state,
                flightsList: action.payload.departure,
            };
        }

        case ARRIVAL_LIST_RECEVEID: {
            return {
                ...state,
                flightsList: action.payload.arrival,
            };
        }

        default:
            return state;
    }
};

export default boardReducer;