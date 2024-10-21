import img6 from "../../assets/Image/Image (6).png";
import AOS from "aos";
import "aos/dist/aos.css";
function Organize() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="Organize">
        <div>
          <img
            data-aos="fade-right"
            src={img6}
            alt="img6"
            className="Organize-img6"
          />
        </div>
        <div data-aos="fade-left" className="Organize-div">
          <h4>Organize & prioritize all work in your team</h4>
          <p className="Organize-para1">
            Sort out the most important and urgent tasks & concentrate on them
            first base your priorities
          </p>
          <p className="Organize-para2">
            Multi-voting helps a committee or group narrow down a large number
            of items into just a few items on which to focus & similar to
            multi-voting, this approach.
          </p>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Organize;
