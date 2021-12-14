import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import * as color from "./utils/colors";

function App() {
  const [name, setName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [transData, setTransdata] = useState([]);
  const [api, setapi] = useState(true);
  const [month, setmonth] = useState("");
  const [netAmt, setnetAmt] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.ninjasalary.com/dummy-transaction-data/"
        );
        const json = await response.json();
        if (json.status) {
          const data = json.data;
          setName(data.admin_name);
          setcompanyName(data.company_name);
          setmonth(data.month);
          setnetAmt(data.net_ns_amount);
          const trans = data.transaction_summary;
          for (let i = 0; i < trans.length; i++) {
            var t = {
              check: false,
              id: i + 1,
              Name: trans[i].name,
              w_amt: trans[i].withdrawn_amount,
              c_amt: trans[i].transaction_fee,
              n_amt: trans[i].net_amount,
            };
            var arr = transData;
            arr.push(t);
            setTransdata(arr);
          }
          setapi(false);
        }
      } catch (error) {
        console.error(error);
        setapi(false);
      }
    };
    getData();
  }, []);

  return (
    <div style={{ backgroundColor: color.Back }}>
      <Header name={name} companyName={companyName} />
      {api ? null : (
        <Body transData={transData} netAmt={netAmt} month={month} />
      )}
    </div>
  );
}

export default App;
