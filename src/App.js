import "./styles.css";
import Tflogo from "./TFLogo.png";
const bool = false;
const str1 = "just";
function Example(props) {
  return (
    <div>
      <h2>
        The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}
      </h2>
      <p>
        The value of the math prop is: <em>{props.math}</em>
      </p>
      <p>
        The value of the str prop is: <em>{props.str}</em>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Example
        toggleBoolean={!bool}
        math={(1 + 20) / 3}
        str={str1 + " another " + "string"}
      />
      {/* Apload an image into react app */}
      <img src={Tflogo} />
    </div>
  );
}
