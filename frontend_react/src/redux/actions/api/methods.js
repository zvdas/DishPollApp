import { RETRIEVE_DISHES, RETRIEVE_DISH_BY_ID } from './types';

export const getAllDishes = (data) => {
    return {
        type: RETRIEVE_DISHES,
        payload: data
    }
}

export const getDishById = (data) => {
    return {
        type: RETRIEVE_DISH_BY_ID,
        payload: data
    }
}