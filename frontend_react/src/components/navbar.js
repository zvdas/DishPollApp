import React, { useState } from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import DisplayDishes from './displayDishes';
import Auth from './auth';
import { getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../configurations/firebase-config';
import { useDispatch } from 'react-redux';
import { logoutAUser } from '../redux/actions/auth/actions';
import Home from './home';

function Navbar() {
    const [user, setUser] = useState({});

    onAuthStateChanged(getAuth(app), (currentUser) => {
        setUser(currentUser);
    })

    const userLoggedIn = () => {
        if(user) {
            return (
                <div>
                    <Route exact path='/' element={<Home/>}/>
                </div>
            );
        } else {
            return (
                <div>
                    <Route exact path='/auth' element={<Auth/>}/>
                </div>
            );
        }
    }

    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutAUser());
    }

    return (
        <HashRouter>
            <nav className='navbar navbar-expand-lg bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 mx-5'>
                        <li className='nav-item mx-5'>
                            <button className='nav-link btn btn-outline' data-bs-toggle='tab'>
                                <Link to={'/'} className='text-primary text-decoration-none'>Home</Link>
                            </button>
                        </li>
                        
                        <li className='nav-item mx-5'>
                            <button className='nav-link btn btn-outline' data-bs-toggle='tab'>
                                <Link to={'/display'} className='text-primary text-decoration-none'>Display Dishes</Link>
                            </button>
                        </li>
                        
                        <li className='nav-item mx-5'>
                            <button className='nav-link btn btn-outline' data-bs-toggle='tab'>
                                <Link to={'/display-ordered'} className='text-primary text-decoration-none'>Display Ordered</Link>
                            </button>
                        </li> 
                    </ul>

                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0 mx-5'>
                        <li className='nav-item mx-5'>
                            <div className='nav-link text-primary'>{user?.email}</div>
                        </li>

                        <li className='nav-item mx-5'>
                            <button className='nav-link btn btn-outline' data-bs-toggle='tab'>
                                <div className='text-primary text-decoration-none' onClick={logout}>Logout</div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                {userLoggedIn}
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/auth' element={<Auth/>}/>
                <Route exact path='/display' element={<DisplayDishes/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Navbar;