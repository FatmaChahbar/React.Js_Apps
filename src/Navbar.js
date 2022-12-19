import logo from "./ProfilePic.jpg";
export default function Navbar() {
  return (
    <nav>
      <img width="250px" src={logo} />
      <h1>CHAHBAR Fatma</h1>
      <h4> Full stack Developer</h4>
      <a>FatmaChahbar.website </a>

      <button> Email </button>
      <button> Linkedin</button>
    </nav>
  );
}
