// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Button({ Color }) {
    const [randomColor, setRandomColor] = useState(Color);

    const changeColor = (e) => {
        e.preventDefault();
        setRandomColor(Color[Math.floor(Math.random() * Color.length)]);
    };

    const buttonStyle = {
        backgroundColor: randomColor,
    };

    return (
        <button onClick={changeColor} style={buttonStyle}>
            Change Color!
        </button>
    );
}

function App() {
    const Color = [
        "#16a085",
        "#27ae60",
        "#2c3e50",
        "#f39c12",
        "#e74c3c",
        "#9bc9b6",
        "#FB6964",
        "#342224",
        "#47EE32",
        "#B2BB99",
        "#7CB1A9",
        "#73A857",
    ];

    return (
        <div className="App">
          <div className=''>
            <h1>Change Button Background</h1>
          </div>
            <div>
                <Button Color={Color} />
            </div>
        </div>
    );
}

export default App;
