import AOS from "aos";
import "aos/dist/aos.css";
function Affordable() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="Affordable">
        <h2 data-aos="fade-down">Simple & affordable pricing plans</h2>
        <div className="Affordable-div">
          <div data-aos="fade-right" className="Affordable-div2">
            <h5>Pay montly</h5>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit dora.
            </p>
            <h4>
              $19/month <br />
              $228/year
            </h4>
            <button data-aos="zoom-out" className="Affordable-button">
              Get montly plan
            </button>
          </div>
          <div data-aos="fade-left" className="Affordable-div2">
            <h5>Pay yearly</h5>
            <p>
              Lorem ipsum dolor sit amet, consect etur adipiscing elit dora.
            </p>
            <h4>
              $12/month <br />
              $144/year
            </h4>
            <button data-aos="zoom-out" className="Affordable-button2">
              Get yearly plan
            </button>
          </div>
        </div>
        <p data-aos="zoom-in-up" className="Affordable-para">
          Looking for a bigger commitment? <b>Let’s talk</b> and we’ll bring
          something great for you
        </p>
      </section>
    </>
  );
}

export default Affordable;
