import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  InputGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../General/logo_web.png";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SellIcon from "@mui/icons-material/Sell";

function Header() {
  return (
      
                <Navbar expand="lg" style={{ padding: "15 px" ,background:"#ffffff"}}>
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
                          <Button variant="outline-success">
                            <i class="bi bi-search"></i>
                          </Button>
                        </InputGroup>
                      </Form>
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

                      <Nav className="ms-auto">
                        <Nav.Link href="#useracc">
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>Y</Avatar>
                        
                        </Nav.Link>
                        
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              
            
          
      

  );
}

export default Header;
