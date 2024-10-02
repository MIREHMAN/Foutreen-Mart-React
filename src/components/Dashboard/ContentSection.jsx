import React from 'react'
import {
  Container,
} from "react-bootstrap";

import AdminDashboardContent from './ContentSectionData/AdminDashboardContent';
import AdminUserContent from './ContentSectionData/AdminUserContent';

function ContentSection() {
  return (
    <Container>
        <AdminDashboardContent/>
        <AdminUserContent/>
      </Container>
  )
}

export default ContentSection