import React from 'react';
import { Navbar } from 'react-bootstrap';
import Menu from './../Manu/Menu';

const Header = () => {
    return (
        <div>
            <div className="row">
                <div className="logo">
                    <img src="https://doccure-html.dreamguystech.com/cardiology/assets/img/logo.png" alt="" />
                </div>
                <div className="manu ">
                    <Menu />
                </div>
                <div className="login ">
                    <button className='btn btn-danger'>Login/signup</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
