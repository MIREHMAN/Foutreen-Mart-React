import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import DataCard from './DataCard';
  
function AdminDashboardContent() {
  return (
    <Container>
    <Row className='my-3'>
          <Col xs={3}>
          <DataCard/>
          </Col>
          <Col xs={3}>
          <DataCard/>
          </Col>
          <Col xs={3}>
          <DataCard/>
          </Col>
          <Col xs={3}>
          <DataCard/>
          </Col>
          </Row>

          <Row className='my-3'>
          <Col xs={8}>
          <DataCard/>
          </Col>
          <Col xs={4}>
          <DataCard/>
          </Col>
          
                    
          </Row>

          <Row>
          <Col xs={8}>
          <DataCard/>
          </Col>
          <Col xs={4}>
          <DataCard/>
          </Col>
          
                    
          </Row>
          </Container>

  )
}

export default AdminDashboardContent