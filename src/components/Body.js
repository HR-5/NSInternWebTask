import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as color from "../utils/colors";
import TableC from "./Table";

const Body = () => {
  return (
    <Container fluid className="p-0">
      <Container fluid style={{ backgroundColor: color.Secondary }}>
        <Container className="p-3">
          <div className="row">
            <div className="col-sm-3">
              <h3
                style={{ color: color.Primary, fontWeight: "bold" }}
                className="w-auto mt-3"
              >
                Transaction History
              </h3>
            </div>
            <div className="col-sm-7"> &nbsp;</div>
            <div className="col-sm-2">
              <Card className="py-1 px-4 z-depth-6 shadow justify-content-end m-auto text-center">
                <Card.Title
                  style={{
                    fontWeight: "bold",
                    color: color.Primary,
                    fontSize: 22,
                    maxWidth: "auto",
                  }}
                >
                  December
                </Card.Title>
                <Card.Text>2021</Card.Text>
              </Card>
            </div>
          </div>
        </Container>
      </Container>
      <Container>
        <TableC />
      </Container>
    </Container>

    // <Container fluid className="p-0">
    //   <Row
    //     style={{ alignItems: "center", backgroundColor: color.Secondary }}
    //     className="p-2"
    //   >
    //     <Col md={{ span: 3, offset: 2 }}>
    //       <h3 style={{ color: color.Primary, fontWeight: "bold" }}>
    //         Transaction History
    //       </h3>
    //     </Col>
    //     <Col md={{ span: "auto", offset: 3 }}>
    //       <Card className="py-1 px-4 z-depth-6 shadow">
    //         <Card.Title
    //           style={{ fontWeight: "bold", color: color.Primary, fontSize: 22 }}
    //         >
    //           August
    //         </Card.Title>
    //         <Card.Text>2021</Card.Text>
    //       </Card>
    //     </Col>
    //   </Row>
    //   <div style={{ backgroundColor: color.Back, paddingInline: 20 }}>
    //     <Table />
    //   </div>
    // </Container>
  );
};

export default Body;
