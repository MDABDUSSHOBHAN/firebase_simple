import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
         <Link to="/home">Home</Link>
         <Link to="/contact">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/login">Login</Link>

        </div>
    );
};

export default Header;