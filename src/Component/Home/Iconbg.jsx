import row1 from "../../assets/Image/Row 1.png";
import row2 from "../../assets/Image/Row 2.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Iconbg() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <div className="iconbg">
        <p data-aos="fade-down">Trusted by nearly 5000+ paying customers</p>
        <div className="iconbg-div">
          <img data-aos="fade-right" src={row1} alt="icons1" />
        </div>
        <div className="iconbg-div">
          <img data-aos="fade-left" src={row2} alt="icons2" />
        </div>
      </div>
    </>
  );
}

export default Iconbg;
