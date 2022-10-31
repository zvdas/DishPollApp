import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { retrieveAllOrderedDishes, retrieveDishes } from './actions/firestore/actions';
import combineReducer from './reducers/combine-reducer';

export const store = createStore(combineReducer, applyMiddleware(thunk));

if (window.location.hash === '#/display') {
    console.log('display page opened');
    store.dispatch(retrieveDishes());
} else if (window.location.hash === '#/display-ordered') {
    console.log('ordered display page opened');
    store.dispatch(retrieveAllOrderedDishes());
}


// store.subscribe(() => console.log('store state: ', store.getState()));