import { render } from '@testing-library/react';
import React, { Component }  from 'react';
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';

class NavbarComp  extends Component {
    render() {
        return(
          
            <>
            <div>
            <Navbar bg="dark" variant="dark"  expand="lg">
      <Container>
        <Navbar.Brand href="/Home" >Pisit</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            
            <NavDropdown title="Roots of Equations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Bisection">Bisection</NavDropdown.Item>
              <NavDropdown.Item href="/Falseposition">False Position</NavDropdown.Item>
              <NavDropdown.Item href="/OnePointiteration">One Point iteration</NavDropdown.Item>
              <NavDropdown.Item href="/NewtonRaphson">Newton Raphson</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="Linear Algebra" id="basic-nav-dropdown">
            
            <NavDropdown.Item href="/CramerRule">Gauss Elimination</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Interpolation" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Lagrange">Lagrange</NavDropdown.Item>
            
            </NavDropdown>

            <NavDropdown title="Least Square Regression" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Regression">Regression</NavDropdown.Item>
            
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

          </div>
        
   
          </>
        )
        
    
        }
}
export default NavbarComp;