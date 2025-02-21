import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
// import Header from "./components/Header";
import AppRouter from "./routes/Routes";
import CursorTrail from "./components/CursorTrail";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <AppRouter />
        <CursorTrail />
      </div>
    </Router>
  );
}

export default App;
