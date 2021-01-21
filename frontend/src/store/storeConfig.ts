import { createStore, combineReducers } from 'redux';
import beerReducer from "./reducers/beer";
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({ // Global State
    beerList: beerReducer
});

const storeConfig = () => applyMiddleware(reduxThunk)(createStore)(reducers, devTools);

export default storeConfig;