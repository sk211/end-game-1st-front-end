import React from 'react';
import Menu from './../Manu/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="logo">
                        <img src="https://doccure-html.dreamguystech.com/cardiology/assets/img/logo.png" alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="manu ">
                        <Menu />
                    </div>
                </div>
                <div className="col-md-3">
                    <Link to="/login" className="login ">
                        <button className='btn btn-danger'>Login/signup</button>
                    </Link>
                </div>



            </div>
        </div>
    );
}

export default Header;
