import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link> */}
                        <Link to="/">Home</Link> |{" "}
                        <Link to="about">About</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
