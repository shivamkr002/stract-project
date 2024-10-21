import img1 from "../../assets/Image/1 2 (1).png";
import img2 from "../../assets/Image/Group 3.png";
import cards from "../../assets/Image/Cards.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <div className="hero-div">
        <h2 data-aos="fade-down">Manage projects with just one click</h2>
        <div className="hero-section-div">
          <p>
            This is software that protects all your data, including strong
            security access. Use data as needed and provide security of all data
            very easily.
          </p>
        </div>
        <div>
          <input
            className="hero-section-input"
            type="email"
            placeholder="Enter your email address"
          />
          <button data-aos="zoom-in" className="hero-section-border-button">
            Start a project
          </button>
        </div>
        <div>
          <img
            data-aos="fade-right"
            className="hero-section-img1"
            src={img1}
            alt="img1"
          />
        </div>
        <div>
          <img
            data-aos="fade-left"
            className="hero-section-img2"
            src={img2}
            alt="img2"
          />
        </div>
        <div>
          <img
            data-aos="fade-up"
            className="hero-section-img3"
            src={cards}
            alt="img3"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
