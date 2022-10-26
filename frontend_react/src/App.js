import './App.css';
import DisplayDishes from './components/displayDishes';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Navbar from './components/navbar';

function App() {
  return (
    <Provider store={store}>
        <Navbar/>
    </Provider>
  );
}

export default App;