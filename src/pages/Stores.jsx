import * as React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StoreCard from "./Stores/StoreCard";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function Stores() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <Container fluid>
      <Row className="mx-4 my-4">
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Stores
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              StorePage
            </Link>
            <Typography sx={{ color: "text.primary" }}>Products</Typography>
          </Breadcrumbs>
        </div>
      </Row>
      <Row className="my-4">
        <Col sm={3}>
          <StoreCard />
        </Col>
        <Col sm={3}>
          <StoreCard />
        </Col>
        <Col sm={3}>
          <StoreCard />
        </Col>
        <Col sm={3}>
          <StoreCard />
        </Col>
      </Row>
    </Container>
  );
}

export default Stores;
