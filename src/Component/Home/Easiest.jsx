import Group1321 from "../../assets/Image/Group 1321314598.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Easiest() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="Easiest">
        <div>
          <img
            data-aos="fade-right"
            src={Group1321}
            alt="img6"
            className="Easiest-img6"
          />
        </div>
        <div className="Organize-div">
          <h4 data-aos="fade-left">The easiest tool to manage all projects</h4>

          <p data-aos="fade-left" className="Easiest-para">
            Using project management tools is an effective way to deliver
            projects on time & organize tasks. It is the way to track progress
            and manage time for successful projects.
          </p>
          <div className="easiest-k">
            <div data-aos="fade-right">
              <h5>12K+</h5>
              <p className="Easiest-para2">Project Created</p>
            </div>
            <div data-aos="fade-left">
              <h5>1947</h5>
              <p className="Easiest-para2">Agencies Joined</p>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Easiest;
