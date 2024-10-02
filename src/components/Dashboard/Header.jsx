import React from "react";
import { Container, Form, InputGroup, Navbar, Nav } from "react-bootstrap";

import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import { deepOrange } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SellIcon from "@mui/icons-material/Sell";

function Header() {
  return (
    <Navbar expand="lg" style={{ padding: "15 px", background: "#ffffff" }}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <h4> Hello Yasir !</h4>
          </Nav>

          <Nav className="me-auto">
            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button variant="contained" color="success">
                  <i class="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Form>
          </Nav>

          <Nav className="mr-auto">
            <Nav.Link href="#orders">
              <Badge badgeContent={4} color="primary">
                <SellIcon color="action" />
              </Badge>
            </Nav.Link>
            <Nav.Link href="#messages">
              <Badge badgeContent={7} color="primary">
                <MailIcon color="action" />
              </Badge>
            </Nav.Link>
            <Nav.Link href="#notifications">
              <Badge badgeContent={13} color="primary">
                <NotificationsIcon color="action" />
              </Badge>
            </Nav.Link>
            </Nav>
            <Nav className="mr-auto">
                <Nav.Link href="#useracc">
                <Button variant="outlined">
                  <Avatar sx={{ bgcolor: deepOrange[500], width: 36, height: 36 }}>Y</Avatar>
                  Yasir
                  </Button>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
