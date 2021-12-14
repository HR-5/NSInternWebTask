import React from "react";
import { Container, Navbar, NavDropdown, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as color from "../utils/colors";

const Header = ({ name, companyName }) => {
  return (
    <Navbar style={{ background: color.Primary }}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={require("../assests/images/nslogo.png").default}
            width="131"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Row style={{ textAlign: "right" }}>
            <NavDropdown
              align="end"
              title={<span style={{ color: "white" }}>Hello, {name}</span>}
              id="nav-dropdown"
              className="p-0"
            >
              <NavDropdown.Item href="/">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/">My Transactions</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
            <span style={{ color: "white" }}>{companyName}</span>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
