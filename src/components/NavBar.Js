import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-Icon1.svg';
import navIcon2 from '../assets/img/nav-Icon2.svg';
import navIcon3 from '../assets/img/nav-Icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const onUpdateActiveLink = (value) => setActiveLink(value);

    useEffect(() => {
        const onScroll= () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);

    }, []);

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>*/}
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#" src={navIcon1} alt=""></a>
                    <a href="#" src={navIcon2} alt=""></a>
                    <a href="#" src={navIcon3} alt=""></a>
                </div>
            </span>
            <button className="vvd" onClick={() => console.log("connect")}><span>"Contactate!"</span></button>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
};