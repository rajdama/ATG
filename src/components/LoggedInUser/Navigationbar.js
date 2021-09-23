import React from 'react'
import {Navbar,Nav, FormControl, Form, Container} from 'react-bootstrap'
import logo from '../../images/logo.png';
import Imagesection from './Imagesection';
import siddhart from '../../images/siddhart.png'
import { NavLink } from 'react-router-dom';
function Navigationbar({windowWidth}) {

    return (
      <>
       
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <NavLink style={{marginLeft:"8px",marginBottom:"4px"}} to="/"><img src={logo}/></NavLink>
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
          <div style={{display:"flex"}}>
          <img style={{marginTop:"8px"}} src={siddhart}/>
          <Nav>
          <div style={{marginTop:"15px", marginLeft:"5px"}}>
              siddhart goyal
              
            </div>
            
          </Nav>
          </div>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      <Imagesection windowWidth={windowWidth}/>
      </>
    )
}

export default Navigationbar
