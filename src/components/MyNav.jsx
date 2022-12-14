import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { BellFill, Search, PersonFill, GridFill, Grid3x3GapFill } from 'react-bootstrap-icons';

class MyNav extends Component {
    render() {
        return (
            <div>
                <Navbar className="budka-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#home">
                            <img className="NavBrand" src="../assets/logo.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse>
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#tv">TV Shows</Nav.Link>
                                <Nav.Link href="#movies">Movies</Nav.Link>
                                <Nav.Link href="#recently">Recently Added</Nav.Link>
                                <Nav.Link href="#list">My List</Nav.Link>
                            </Nav>
                            <Nav className="flex-row justify-content-evenly">
                                <Nav.Link className="text-light" href="#search"><Search /></Nav.Link>
                                <Nav.Link className="text-light" href="#memes">
                                    KIDS
                                </Nav.Link>
                                <Nav.Link className="text-light" href="#bell"><BellFill /></Nav.Link>
                                <Nav.Link className="text-light" href="#person"><PersonFill /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Navbar className="budka-nav" bg="dark">
                    <Container className="justify-content-between" fluid>
                        <Navbar.Brand className="d-flex align-items-center w-50" href="#home">
                            <h2 className='text-light'>TV Shows</h2>
                            <NavDropdown id="navDropdown" className="text-light bg-dark ms-4" title="Genres">
                                <NavDropdown.Item href="#action/3.1">Comedy</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Drama
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Thriller</NavDropdown.Item>
                            </NavDropdown>
                        </Navbar.Brand>
                        <Nav className="flex-row justify-content-evenly">
                            <Nav.Link className="text-light" href="#search"><GridFill /></Nav.Link>
                            <Nav.Link className="text-light" href="#memes">
                                <Grid3x3GapFill />
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        );
    }
}

export default MyNav;
