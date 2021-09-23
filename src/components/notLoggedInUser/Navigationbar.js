import React from 'react'
import {Navbar,Nav, FormControl, Form, Container, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import Imagesection from './Imagesection';

function Navigationbar({windowWidth}) {

    return (
      
      <>
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <NavLink style={{marginLeft:"10px",marginBottom:"5px"}} to="/"><img src={logo}/></NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Form  style={{margin:"auto"}} className="d-flex">
            <FormControl style={{
              width:"360px", height:"40px", left:"650px", bottom:"5px", borderRadius:"21px"}}
              type="search"
              placeholder="🔎   Search for your favourite groups in ATG"
              className="mr-2"
              aria-label="Search"
            />
            
          </Form>
          <NavLink to="/signup" style={{ textDecoration:"none", color:"black"}}>
           
          <div style={{marginLeft:"5px", marginTop:"5px"}}  type="button"><strong> Create account. </strong> It's free! </div>
          </NavLink>  
          
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Imagesection windowWidth={windowWidth}/>
      </>
    )
}

export default Navigationbar
