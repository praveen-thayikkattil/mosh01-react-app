import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <strong>Mosh Hamedani</strong>
        </p>
        <a
          className="App-link"
          href="https://github.com/praveen-thayikkattil/mosh01-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tutorial App <code>01 React</code>
        </a>
      </header>
    </div>
  );
}

export default App;
