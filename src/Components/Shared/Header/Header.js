import { signOut } from 'firebase/auth';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    return (
        <nav>
            <div>
                <h1>Royal-Bikes</h1>
            </div>
            <ul>
                <li><CustomLink to='/'>Home</CustomLink></li>
                <li><CustomLink to='/manage-inventories'>Manage Inventories</CustomLink></li>
                <li><CustomLink to='/add-inventory-item'>Add Inventory Item</CustomLink></li>
                <li><CustomLink to='/my-items'>My Items</CustomLink></li>

                {
                    user ? <button className='border-0 bg-warning rounded' onClick={logout}>Signout</button>

                        :
                        <div className='d-flex'>
                            <li><CustomLink className="m-2 text-decoration-none" to="/login">Login</CustomLink></li>
                            <li><CustomLink className="m-2 text-decoration-none" to="/register">Register</CustomLink></li>
                        </div>

                }

            </ul>
        </nav>
    );
};

export default Header;