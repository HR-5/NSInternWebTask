import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Body from "./components/Body";
import * as color from "./utils/colors";

function App() {
  return (
    <div style={{ backgroundColor: color.Back }}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
