import img7 from "../../assets/Image/Image (7).png";
import AOS from "aos";
import "aos/dist/aos.css";
function Seprate() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="separate">
        <div data-aos="fade-right" className="separate-div">
          <h4>Always a separate plan for each project</h4>
          <p className="separate-para1">
            Project planning provides structure & foresight for the helping to
            eliminate wasteful activities and patterns. This is why the
            companies that stick to solid project management practices waste a
            lot less money
          </p>
          <button data-aos="zoom-out" className="separate-button">
            Start a project
          </button>
        </div>
        <div>
          <img
            data-aos="fade-left"
            src={img7}
            alt="img7"
            className="separate-img6"
          />
        </div>
      </section>
      <hr />
    </>
  );
}

export default Seprate;
