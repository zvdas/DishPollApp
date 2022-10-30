import { RETRIEVE_DISHES, CREATE_DISHES_SELECTION, RETRIEVE_ORDERED_DISHES } from './types';

export const getAllDishes = (data) => {
    return {
        type: RETRIEVE_DISHES,
        payload: data
    }
}

export const createDishesSelection = (data) => {
    return {
        type: CREATE_DISHES_SELECTION,
        payload: data
    }
}

export const getAllOrderedDishes = (data) => {
    return {
        type: RETRIEVE_ORDERED_DISHES,
        payload: data
    }
}