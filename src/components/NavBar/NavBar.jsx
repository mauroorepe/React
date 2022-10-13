import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Link to='/'><Navbar.Brand> Logo </Navbar.Brand></Link>
                <Nav className="me-auto">
                    <Link to="/categoria/zapatillas"> <Nav.Link >Zapatillas</Nav.Link> </Link>
                    <Link to="/categoria/zapatos"> <Nav.Link >Zapatos</Nav.Link> </Link>
                    <Link to="/categoria/ojotas"> <Nav.Link >Ojotas</Nav.Link> </Link>
                </Nav>
            <Link to='/cart'><Navbar.Brand> Carrito </Navbar.Brand></Link>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar