import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import DataCard from './DataCard';

function AdminSellerContent() {
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
          <Col xs={12}>
          <DataCard/>
          </Col>
           
          </Row>

         
          
        
          </Container>
  )
}

export default AdminSellerContent