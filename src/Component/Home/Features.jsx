import icon1 from "../../assets/Image/icon (1).png";
import icon2 from "../../assets/Image/icon (2).png";
import icon3 from "../../assets/Image/icon (3).png";
import vector from "../../assets/Image/Vector.png";
import layer2 from "../../assets/Image/Layer 2.png";
import layer21 from "../../assets/Image/Layer 2 (1).png";
import AOS from "aos";
import "aos/dist/aos.css";

function Features() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="Features">
        <h2 data-aos="fade-down">Check all features</h2>
        <div data-aos="fade-up" className="Features-div">
          <div>
            <img src={icon1} alt="" className="Features-div-img" />
            <h4>Resource Management</h4>
            <p>
              Resource management is the process of pre-planning, scheduling,
              and allocating your resources to maximize efficiency.
            </p>
          </div>
          <div>
            <img src={vector} alt="" className="Features-div-img" />
            <h4>Increase Productivity</h4>
            <p>
              Increased productivity means greater output from the same amount
              of input & It is getting important things done consistently.
            </p>
          </div>
          <div>
            <img src={icon2} alt="" className="Features-div-img" />

            <h4>Easy Collaboration</h4>
            <p>
              Working collaboratively helps improve productivity and gives
              employees a sense of purpose in the organization.
            </p>
          </div>
        </div>
        <div data-aos="fade-up" className="Features-div">
          <div>
            <img src={icon3} alt="" className="Features-div-img" />

            <h4>Unified Reporting</h4>
            <p>
              With unified reporting, all the project stakeholders can view the
              test reports for functional tests on dashboard.
            </p>
          </div>
          <div>
            <img src={layer2} alt="" className="Features-div-img" />

            <h4>Advanced Inventory</h4>
            <p>
              With Advanced Inventory, you equipped with an automated system
              that calculates the quantity and true value of your inventory.
            </p>
          </div>
          <div>
            <img src={layer21} alt="" className="Features-div-img" />

            <h4>Optimize Workflow</h4>
            <p>
              Operations Optimization is the process of ensuring that your
              operations are performing as efficient & effective.
            </p>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Features;
