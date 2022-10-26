import apiDbService from '../../../services/api-db-service';
import { getAllDishes, getDishById } from './methods';

export const retrieveDishes = () => {
    return (dispatch) => {
        return apiDbService
            .getAll()
            .then(response => {
                dispatch(getAllDishes(response.data));
            })
            .catch(err => { throw(err) });
    }
}

export const retrieveDishById = (id) => {
    return (dispatch) => {
        return apiDbService
            .getById(id)
            .then(response => {
                dispatch(getDishById(response.data));
            })
            .catch(err => { throw(err) });
    }
}