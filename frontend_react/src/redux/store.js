import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { retrieveDishes } from './actions/api/actions';
import combineReducer from './reducers/api/combine-reducer';

export const store = createStore(combineReducer, applyMiddleware(thunk));

store.dispatch(retrieveDishes());

// store.subscribe(() => console.log('store state: ', store.getState()));