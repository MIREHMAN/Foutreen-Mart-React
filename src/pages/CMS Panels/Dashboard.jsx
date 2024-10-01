import React from 'react';
import { Container,Row,Col , Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '../../components/Dashboard/Header';
import './Dashboard.css'
import Sidebar from '../../components/Dashboard/Sidebar';
import ContentSection from '../../components/Dashboard/ContentSection';



function Dashboard() {
  return (
    <Container fluid>
        <Row>
          <Col xs={3}>
          <Sidebar/>
          </Col>
          <Col xs={9}>
          <Header/>
          <ContentSection/>
          </Col>
          </Row>
      </Container>
    
  );
}

export default Dashboard;