import app from '../configurations/firebase-config';
import { getFirestore } from 'firebase/firestore';
import { addDoc, collection, getDocs  } from 'firebase/firestore';

const db = getFirestore(app);

let dishes = collection(db, 'dishes');
let dish_rank = collection(db, 'dish_rank');

class FirestoreService {
    getAll () {
      return getDocs(dishes)
      .then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }
    create (data) {
        return addDoc(dish_rank, data.selectedDishes);
    }
}

export default new FirestoreService();