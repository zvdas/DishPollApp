import { RETRIEVE_DISHES, CREATE_DISHES_SELECTION } from '../actions/firestore/types';

export default function DishReducer(state=[], action) {
    switch (action.type) {
        case RETRIEVE_DISHES:
            return action.payload;
        case CREATE_DISHES_SELECTION:
            return action.payload;
        default:
            return state;
    }
}