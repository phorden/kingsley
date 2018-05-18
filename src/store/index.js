import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from "../reducers/index";

const reducers = combineReducers(rootReducer);

const store = createStore(
    reducers,
    applyMiddleware(logger, crashReporter)
);

export default store;