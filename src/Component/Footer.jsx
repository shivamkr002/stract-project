import logo from "../assets/Image/Logo.png";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
function Footer() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <footer>
        <hr />
        <div className="footer-div">
          <h2 data-aos="fade-down">
            Drop us a line or two, we are open for creative minds and
            collaborations!
          </h2>
          <div>
            {" "}
            <a href="#">
              <button data-aos="zoom-out" className="footer-border-button">
                Start a project
              </button>
            </a>
          </div>
        </div>
        <div className="stract-footer">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-header-div">
            <ul className="list">
              <a href="#">
                <li data-aos="fade-down">About</li>
              </a>
              <a href="#">
                <li data-aos="fade-up">Features</li>
              </a>
              <a href="#">
                <li data-aos="fade-down">Works</li>
              </a>
              <a href="#">
                <li data-aos="fade-up">Support</li>
              </a>
            </ul>
          </div>
          <div className="footer-icon">
            <a href="#">
              <p data-aos="fade-left">
                {" "}
                <RiTwitterXFill className="red" />
              </p>{" "}
            </a>
            <a href="#">
              <p data-aos="fade-up">
                {" "}
                <FaFacebookF className="red" />
              </p>{" "}
            </a>
            <a href="#">
              <p data-aos="fade-down">
                {" "}
                <FaInstagram className="red" />{" "}
              </p>{" "}
            </a>
            <a href="#">
              <p data-aos="fade-right">
                {" "}
                <IoLogoGithub className="red" />{" "}
              </p>{" "}
            </a>
          </div>
        </div>
        <hr />
        <div className="footer-last-div">
          <div>
            <p>© Copyright 2022, All Rights Reserved</p>
          </div>
          <div>
            <p>Privacy Policy Terms & Conditions</p>
          </div>
        </div>
        <hr />
      </footer>
    </>
  );
}

export default Footer;
