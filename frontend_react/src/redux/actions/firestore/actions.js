import firestoreService from '../../../services/firestore-service';
import { getAllDishes, createDishesSelection } from '../firestore/methods';

export const retrieveDishes = () => {
    return async (dispatch) => {
        try {
            const response = await firestoreService
                .getAll();
            dispatch(getAllDishes(response.data));
        } catch (err) {
            throw (err);
        }
    }
}

export const createNewDishesSelection = (selectedDishes) => {
    return async (dispatch) => {
        try {
            const response = await firestoreService
                .create({ selectedDishes });
            dispatch(createDishesSelection(response.data));
        } catch (err) {
            throw (err);
        }
    }
}