import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DataCard from "./DataCard";
import TableDataCard from "./TableDataCard";
import SalesChartDataCard from "./SalesChartDataCard";
import SalesPieChartDataCard from "./SalesPieChartDataCard";


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

      const salesData = [
        {
          month: 'Jan',
          sales: 100,
        },
        {
          month: 'Feb',
          sales: 120,
        },
        {
          month: 'Mar',
          sales: 150,
        },
        {
            month: 'Apr',
            sales: 80,
          },
          {
            month: 'May',
            sales: 50,
          },
          {
            month: 'June',
            sales: 130,
          },
      ];
      
      const salesDataGenderBased = [
        {
          gender: 'Male',
          sales: 100,
        },
        {
          gender: 'Female',
          sales: 120,
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
        <SalesChartDataCard salesData={salesData}/>
        </Col>
        <Col xs={4}>
          <DataCard title= "Top Selling Perfume" 
            value= "200"
            percentage="5"
            
        />
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
