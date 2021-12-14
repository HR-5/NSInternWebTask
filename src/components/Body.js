import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as color from "../utils/colors";
import TableC from "./Table";

const Body = ({ transData, netAmt, month }) => {
  const [data, setData] = useState(transData);

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
                  {month}
                </Card.Title>
                <Card.Text>2021</Card.Text>
              </Card>
            </div>
          </div>
        </Container>
      </Container>
      <Container>
        <TableC transData={data} netAmt={netAmt} />
      </Container>
    </Container>
  );
};

export default Body;
