import github from "./GitHub Icon.png";
import fb from "./Facebook Icon.png";
import insta from "./Instagram Icon.png";
import twit from "./Twitter Icon.png";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={github} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src={fb} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src={insta} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src={twit} />
      &nbsp;&nbsp;&nbsp;&nbsp;
    </footer>
  );
}
