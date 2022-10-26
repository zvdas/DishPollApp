import React from 'react';
import { HashRouter, Link, Routes, Route } from 'react-router-dom';
import DisplayDishes from './displayDishes';

function Navbar() {
    return (
        <HashRouter>
            <nav className='navbar navbar-expand-lg bg-dark'>
                <div className='container-fluid'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0 mx-5'>
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
                            <button className='nav-link btn btn-outline' data-bs-toggle='tab'>
                                <div className='text-primary text-decoration-none'>Logout</div>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path='/display' element={<DisplayDishes/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Navbar;