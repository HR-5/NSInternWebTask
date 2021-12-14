import React, { useState, useEffect } from "react";
import { Container, FormControl, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as color from "../utils/colors";
import {
  FaSearch,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const TableC = ({ transData, netAmt }) => {
  const [selCheck, setselCheck] = useState(false);
  const [checkNum, setcheckNum] = useState(0);
  const [data, setData] = useState(transData);

  const selectAll = () => {
    var chec = !selCheck;
    setselCheck(chec);
    if (chec) setcheckNum(data.length);
    else setcheckNum(0);
    var arr = data;
    for (let index = 0; index < data.length; index++) {
      arr[index] = { ...data[index], check: chec };
    }
    setData(arr);
  };

  const check = (index) => {
    var chec = !data[index].check;
    if (chec) {
      setcheckNum(checkNum + 1);
    } else {
      setcheckNum(checkNum - 1);
    }
    var arr = data;
    arr[index] = { ...data[index], check: chec };
    setData(arr);
  };

  return (
    <Container
      className="shadow z-depth-5 mt-3"
      style={{ backgroundColor: "white" }}
    >
      <div className="row">
        <div className="col-md-12 mt-3 mb-3" style={{ fontSize: 13 }}>
          Column{" "}
          <select>
            <option>5</option>
            <option>10</option>
          </select>
          <span style={{ marginLeft: 15 }}>Total money to Pay </span>
          <span style={{ color: color.Primary, fontWeight: "bold" }}>
            {"\u20B9"}
            {netAmt}
          </span>
        </div>
        <hr className="m-0" />
      </div>
      <div className="row">
        <div
          style={{ display: "inline-flex", width: "20%" }}
          className="mt-3 mb-3"
        >
          <span
            style={{
              marginTop: "13px",
              marginBottom: "13px",
              paddingLeft: "4px",
              paddingRight: "4px",
              backgroundColor: color.Tertiary,
              color: color.Secondary,
            }}
          >
            {checkNum}
          </span>
          <InputGroup style={{ marginLeft: "1em" }}>
            <FormControl
              id="inlineFormInputGroupUsername"
              placeholder="Search"
            />
            <InputGroup.Text>
              <FaSearch />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <Table bordered hover>
        <thead style={{ backgroundColor: "#eeeeee" }}>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={selectAll}
                style={{ color: color.Primary }}
              ></input>
            </th>
            <th>Id</th>
            <th>Name</th>
            <th>Withdraw Amount</th>
            <th>Commision Amount</th>
            <th>Net Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((type, index) => {
            console.log(type);
            if (type.check) {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked
                      onChange={() => check(index)}
                    ></input>
                  </td>
                  <td>{type.id}</td>
                  <td>{type.Name}</td>
                  <td>{type.w_amt}</td>
                  <td>{type.c_amt}</td>
                  <td>{type.n_amt}</td>
                </tr>
              );
            } else {
              return (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      onChange={() => check(index)}
                    ></input>
                  </td>
                  <td>{type.id}</td>
                  <td>{type.Name}</td>
                  <td>{type.w_amt}</td>
                  <td>{type.c_amt}</td>
                  <td>{type.n_amt}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
      <div className="row text-right">
        <div
          className="col-md-12 mt-2 mb-3 "
          style={{ textAlign: "right", color: "#999999", fontSize: 13 }}
        >
          Row per page:{" "}
          <select>
            <option>5</option>
            <option>10</option>
          </select>{" "}
          <span style={{ marginLeft: 20 }}> 1-2 of 2 </span>
          <FaAngleDoubleLeft style={{ marginLeft: 20 }} />
          <FaAngleLeft style={{ marginLeft: 20 }} />
          <FaAngleRight style={{ marginLeft: 20 }} />
          <FaAngleDoubleRight style={{ marginLeft: 20 }} />
        </div>
      </div>
    </Container>
  );
};

export default TableC;
