import React from 'react';
import logo from '../assets/logo2.jpg';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default function NavigationBar() {
  return (
    <Nav variant='pills' defaultActiveKey="/home">
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">PROGRAMA DE GESTIÓN DE INCIDENTES</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse id="navbarResponsive">
              <Nav className='justify.content-center' activeKey= "/home">
                  <Nav className="me-auto">
                    <Nav.Item>
                      <Nav.Link link to="/inicio" href="#Inicio">Inicio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>  
                      <Nav.Link  link to="/VerTickets" href="#VerTickets">Ver tickets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link  link to="/CrearTicket" href="#CrearTicket">Crear Ticket</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#Login">Iniciar Sesión</Nav.Link>
                    </Nav.Item>
                  </Nav>
              </Nav>
              <Row>
      <Col xs={8} md={14}>    
        <Image src={ logo }roundedCircle/>          
      </Col>
    </Row>
            </Navbar.Collapse>
            
      </Container>
      
    </Navbar>
    
    </Nav>
    
  );
}

