import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import { Link } from "react-router-dom";

import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../stores/use-auth-store';
import { useCallback } from "react";

function Navbarcom() {

    const { logout } = useAuthStore();
    const navigate = useNavigate();
  
    const handleLogout = useCallback(() => {
      logout();
      navigate('/');
    }, [logout, navigate]);
  
    const handleButton = (route) => {
      navigate(route);
    };

    return (
        <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
            <Container fluid className="w-100">
                <Navbar.Brand href="/">Planet Energy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/biodiversity">Biodiversidad</Nav.Link>
                        <Nav.Link as={Link} to="/deforest">Deforestación</Nav.Link>
                        <Nav.Link as={Link} to="/erosion">Erosión</Nav.Link>  
                        <Nav.Link as={Link} to="/QuizErosion">QUIZ</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="outline-success" onClick={handleLogout}>Cerrar Sesión</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbarcom;
