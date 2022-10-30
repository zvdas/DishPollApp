import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { retrieveDishes, retrieveAllOrderedDishes } from './actions/firestore/actions';
import combineReducer from './reducers/combine-reducer';

export const store = createStore(combineReducer, applyMiddleware(thunk));

store.dispatch(retrieveDishes());

store.dispatch(retrieveAllOrderedDishes());

// store.subscribe(() => console.log('store state: ', store.getState()));