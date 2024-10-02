import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataCard from "./DataCard";
import TableDataCard from "./TableDataCard";


function AdminDashboardContent() {
  
    const dashboardCardData = [
        {
          id: 1,
          title: "Total Users",
          value: 100,
          image: "/assets/images/decrease_img.png",
          percentage: 5,
          description: "Monthly increase",
        },
        {
          id: 2,
          title: "Total Sellers",
          value: 1000,
          image: "/assets/images/decrease_img.png",
          percentage: 53,
          description: "Quarterly decrease",
        },
        {
          id: 3,
          title: "Total Products",
          value: 500,
          image: "/assets/images/stable_img.png",
          percentage: 0,
          description: "No change",
        },
        {
          id: 4,
          title: "Total Orders",
          value: 250,
          image: "/assets/images/increase_img.png",
          percentage: 10,
          description: "Yearly increase",
        },
      ];

  
  
  
  
  
  
  return (
    <Container>
      <Row className="my-3">
      {dashboardCardData.map((data) => (
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

      <Row className="my-3">
        <Col xs={8}>
        <DataCard />
        </Col>
        <Col xs={4}>
          <DataCard />
        </Col>
      </Row>

      <Row>
        <Col xs={8}>
        <TableDataCard/>
        </Col>
        <Col xs={4}>
          <DataCard />
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboardContent;
