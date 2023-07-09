import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

import { navlist } from './NavItems/NavbarList';
import NavItems from './NavItems/NavItems';

const Header = () => {
  const [add, setAdd] = useState(0);
  return (    
    <Navbar expand="xl" className="nav mb-3">
          <Container fluid>
            <Navbar.Brand><Link 
              to="/"
              className='navHead'
              >Hungry Kolkata</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {navlist.map((val,key)=>{
                      return (
                          <Nav.Link className='routes'>
                            <NavItems
                                key={key}
                                image = {val.logo}
                                name = {val.name}
                                link = {val.link}
                            />
                          </Nav.Link>
                      );
                  })}  
                  <Nav.Link>
                    <Link onClick={()=>{
                        setAdd(add+1);
                    }} className='navItemContainer'>
                        <span className='navItemLogo'><i class="bi bi-cart"></i></span>
                        <p className='navItemText'>Add-to-Cart</p>
                    </Link>     
                    <div className='cartNumber'>{add}</div>   
                  </Nav.Link>            
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
  );
}

export default Header;
