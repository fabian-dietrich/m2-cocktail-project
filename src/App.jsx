import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="drink">🍸</h1>
      <h1>Kelechi + Fabian</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          You have had {count} drinks. Click here for another.
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        please drink responsibly
      </p>
    </>
  );
}

export default App;
