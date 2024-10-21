import logo from "../assets/Image/Logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Header() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-div">
          <p id="close"></p>

          <ul className="list">
            <a href="#">
              <li>Demos</li>
            </a>
            <a href="#">
              <li>About</li>
            </a>
            <a href="#">
              <li>Blog</li>
            </a>
            <a href="#">
              <li>Pages</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <a href="#">
          <button data-aos="zoom-in" className="border-button">
            Get Started Free
          </button>
        </a>
      </nav>
    </>
  );
}

export default Header;
