import logo from "./ProfilePic.jpg";
import "./styles.css";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <img width="150px" src={logo} />
      <h1>CHAHBAR Fatma</h1>
      <h4> Full stack Developer</h4>
      <h5>FatmaChahbar.website </h5>
      <button className="btn1"> Email </button> &nbsp;&nbsp;&nbsp;
      <button className="btn1"> Linkedin</button>
    </nav>
  );
}
