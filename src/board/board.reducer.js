import { DEPARTURE_LIST_RECEIVED } from './board.actions';
import { ARRIVAL_LIST_RECEVEID } from './board.actions';
import { FILTER_TEXT } from './board.actions';

const initialState = {
    flightsList: [],
    arrivalClick: false,
    departureClick: false,
    filterText: '',
};

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case DEPARTURE_LIST_RECEIVED: {
            return {
                ...state,
                flightsList: action.payload.departure,
                arrivalClick: false,
                departureClick: true,
            };
        }

        case ARRIVAL_LIST_RECEVEID: {
            return {
                ...state,
                flightsList: action.payload.arrival,
                arrivalClick: true,
                departureClick: false,
            };
        }

        case FILTER_TEXT: {
            return {
                ...state,
                filterText: action.payload.text,
            };
        }

        default:
            return state;
    }
};

export default boardReducer;