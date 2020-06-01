import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import boardReducer from "./features/board/board.reducer";

const reducer = combineReducers({
  board: boardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem("app_state", serialisedState);
};

const loadState = () => {
  const serialisedState = window.localStorage.getItem("app_state");

  if (!serialisedState) return;

  return JSON.parse(serialisedState);
};

const oldState = loadState();

const store = createStore(
  reducer,
  oldState,
  composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
