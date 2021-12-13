import React, { useState, useEffect } from "react";
import {
  Col,
  Container,
  Image,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as color from "../utils/colors";

const Header = () => {
  const [name, setName] = useState("");
  const [companyName, setcompanyName] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://api.ninjasalary.com/get-dummy-dashboard-data/"
      );
      const json = await response.json();
      if (json.status) {
        const data = json.data;
        setName(
          data.first_name + " " + data.middle_name + " " + data.last_name
        );
        setcompanyName(data.company_name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

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
