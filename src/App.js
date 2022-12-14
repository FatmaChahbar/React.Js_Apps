//const bool = false;
//const str1 = "just";
import Navbar from "./Navbar";
import Main from "./Main";
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
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
