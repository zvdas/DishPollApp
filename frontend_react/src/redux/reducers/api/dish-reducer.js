import { RETRIEVE_DISHES, RETRIEVE_DISH_BY_ID } from "../../actions/api/types";

export default function DishReducer(state=[], action) {
    switch (action.type) {
        case RETRIEVE_DISHES:
            return action.payload;
        case RETRIEVE_DISH_BY_ID:
            return action.payload;
        default:
            return state;
    }
}