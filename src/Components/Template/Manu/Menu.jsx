import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link> */}
                        <Link to="/">Home</Link> | {" "}
                        <Link to="about">Doctor</Link>
                        <Link to="/Patients">Patients</Link>
                        <Link to="/Appin">Test</Link>
                        <Link to="/Appointment">Appointment</Link>
                        <Link to="/dashboard">
                            <button className='btn btn-danger'>Dashboard</button>

                        </Link>
                        <Link to="/login">

                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
