import React from 'react'
import {
  Container,
} from "react-bootstrap";

import AdminDashboardContent from './ContentSectionData/AdminDashboardContent';
import AdminUserContent from './ContentSectionData/AdminUserContent';
import AdminSellerContent from './ContentSectionData/AdminSellerContent';

function ContentSection() {
  return (
    <Container>
        <AdminDashboardContent/>
        <AdminUserContent/>
        <AdminSellerContent/>
      </Container>
  )
}

export default ContentSection