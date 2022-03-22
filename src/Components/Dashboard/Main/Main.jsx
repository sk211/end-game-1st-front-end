import React from 'react'
import "./Main.css"
import { Link, Outlet, Route, Routes } from 'react-router-dom';
// import Dhome from '../DashhboardHome/Dhome';
import Dhome from './../DashhboardHome/Dhome';

const doctorImg = {
    "width": "150px",
    "height": "150px",
    "border-radius": "50%"
}

export default function Main() {
    return (
        <div className="container ">

            <div className='row'>

                <div className=" text-center">
                    <div className="sidebar-section">
                        <div className="doctor" >
                            <img style={doctorImg} src="https://doccure-react.dreamguystech.com/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg" alt="" />
                            <h4>Doctor name</h4>
                            <h6>Doctor position</h6>
                        </div>
                        <Link to="/dashboard"><li>Dashboard</li></Link>
                        <Link to="/dashboard/review"><li>Review</li></Link>
                        <Link to='/dashboard/Invoice'><li>Invoize</li></Link>
                        <Link to='/dashboard/appomiment'><li>Appomiment</li></Link>
                        <Link to='/dashboard/Logout'><li>Logout</li></Link>

                    </div>
                </div>

                <Routes>
                    <Route path="/dashboard" element={<Dhome />} />
                </Routes>
                <Outlet />


            </div>
        </div>


    )
}
