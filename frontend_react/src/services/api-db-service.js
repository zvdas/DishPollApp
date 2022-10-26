import axios from 'axios';

const url = process.env.REACT_APP_API_DB_URL;

class DbService {
    getAll() {
        return axios.get(url);
    }
    getById(id) {
        return axios.get(`${url}/${id}`);
    }
}

export default new DbService();