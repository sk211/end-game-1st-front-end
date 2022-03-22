import React from 'react'
import "./Foooter.css"

export default function Footer() {
    return (
        <footer className="row">
            <div className="col-md-3">
                <img src="https://doccure-html.dreamguystech.com/cardiology/assets/img/footer-logo.png" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error rerum possimus neque vel tenetur. Dolorem ratione ad veritatis labore aliquid, quae vero voluptatem praesentium odio dolores autem nostrum illum?</p>
                <div className="social-media">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </div>
            </div>
            <div className="col-md-3">
                <h2>For Patients</h2>
                <li>Search for Doctors</li>
                <li>Login</li>
                <li>Regester</li>
                <li>Booking</li>
                <li>Dashboard</li>
            </div>
            <div className="col-md-3">
                <h2>Doctors</h2>
                <li>Search for Doctors</li>
                <li>Login</li>
                <li>Regester</li>
                <li>Booking</li>
                <li>Dashboard</li>
            </div>
            <div className="col-md-3">
                <h2>Contact Us</h2>
                <li>Search for Doctors</li>
                <li>Login</li>
                <li>Regester</li>
                <li>Booking</li>
                <li>Dashboard</li>
            </div>
        </footer>
    )
}
