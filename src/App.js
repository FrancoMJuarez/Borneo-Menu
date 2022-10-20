// import './fonts/kenyan-coffee-bd.tff'
// import './fonts/kenyan-coffee-rg.tff'
import "./App.css";
import Home from "./components/Home";
import Section from "./components/Section";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/1" element={ <Section />} />
      </Routes>
    </>
  );
}

export default App;
