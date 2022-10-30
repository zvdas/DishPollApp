import firestoreService from '../../../services/firestore-service';
import { getAllDishes, createDishesSelection, getAllOrderedDishes } from '../firestore/methods';

export const retrieveDishes = () => {
    return (dispatch) => {
        return firestoreService
            .getAll()
            .then(response => {
                dispatch(getAllDishes(response.data));
            })
            .catch(err => { throw(err) });
    }
}

export const createNewDishesSelection = (selectedDishes) => {
    return (dispatch) => {
        return firestoreService
        .create({selectedDishes})
        .then(response => {
            dispatch(createDishesSelection(response.data));
        })
        .catch(err => { throw(err) });
    }
}

export const retrieveAllOrderedDishes = () => {
    return (dispatch) => {
        return firestoreService
            .getAllOrdered()
            .then(response => {
                dispatch(getAllOrderedDishes(response.data));
            })
            .catch(err => { throw(err) });
    }
}