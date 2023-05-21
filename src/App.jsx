import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div
        className="card shadow-lg p-3 mb-5 bg-body rounded"
        style={{ width: "40rem" }}
      >
        <div className="card-body">
          <h3 className="card-title text-primary">Your Todo App</h3>
          <Home></Home>
        </div>
      </div>
    </div>
  );
}

export default App;
