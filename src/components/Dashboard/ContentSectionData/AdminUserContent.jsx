import React from 'react'
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
  import DataCard from './DataCard';
import AdminUserDataTable from './AdminUserDataTable';

function AdminUserContent() {
  const usersCardData = [
    {
      id: 1,
      title: "Total Users",
      value: 100,
      image: "/assets/images/decrease_img.png",
      percentage: 5,
      
    },
    {
      id: 2,
      title: "Active Users",
      value: 1000,
      image: "/assets/images/decrease_img.png",
      percentage: 7,
      
    },
    {
      id: 3,
      title: "New Users",
      value: 500,
      image: "/assets/images/stable_img.png",
      percentage: 0,
      
    },
    {
      id: 4,
      title: "Blocked Users",
      value: 250,
      image: "/assets/images/increase_img.png",
      percentage: 10,
      
    },
  ];

  return (
    <Container>
    <Row className="my-3">
      {usersCardData.map((data) => (
        <Col xs={3} key={data.id}>
          <DataCard 
            title={data.title} 
            value={data.value} 
            percentage={data.percentage} 
            
            description={data.description}
          />
        </Col>
      ))}
    </Row>

          <Row className='my-3'>
          <Col xs={12}>
          <DataCard/>
          </Col>
           
          </Row>
          </Container>
  )
}

export default AdminUserContent