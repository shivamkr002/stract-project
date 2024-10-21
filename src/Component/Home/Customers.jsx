import maskgroup from "../../assets/Image/Mask Group.png";
import maskgroup1 from "../../assets/Image/Mask Group (1).png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AOS from "aos";
import "aos/dist/aos.css";
function Customers() {
  AOS.init({
    duration: 1400,
  });
  return (
    <>
      <section className="Customers">
        <div className="Customers-div1">
          <h1 data-aos="fade-right">Honest reviews from our customers </h1>
          <div className="Customers-icon-div">
            {" "}
            <p data-aos="fade-right" className="Customers-icon">
              <ArrowBackIcon />
            </p>
            <p data-aos="fade-left" className="Customers-icon1">
              <ArrowForwardIcon />
            </p>
          </div>
        </div>
        <div className="Customers-div">
          <div data-aos="fade-right" className="Customers-div-flex">
            <div className="Customers-div-flex1">
              <div>
                <img src={maskgroup} alt="pic" className="logo-img" />
              </div>
              <div className="section-buss">
                <h2>Shivam kumar</h2>
                <p className="Customers-div-para2">Frontend Developer</p>
              </div>
            </div>
            <p className="Customers-div-para1">
              We test and compare the best project management software for
              collaborating with a team, hitting deadlines.
            </p>
          </div>
          {/*<div></div>
            <div></div> */}
          <div data-aos="fade-up" className="Customers-div-flex">
            <div className="Customers-div-flex1">
              <div>
                <img src={maskgroup} alt="pic" className="logo-img" />
              </div>
              <div className="section-buss">
                <h2>Robert Fox</h2>
                <p className="Customers-div-para2">UI/UX Designer</p>
              </div>
            </div>
            <p className="Customers-div-para1">
              Project management skimping on core features. It strong at
              enabling with collaboration on visual materials.
            </p>
          </div>
          {/*<div></div>
            <div></div> */}
          <div data-aos="fade-left" className="Customers-div-flex">
            <div className="Customers-div-flex1">
              <div>
                <img src={maskgroup1} alt="pic" className="logo-img" />
              </div>
              <div className="section-buss">
                <h2>Robert Fox</h2>
                <p className="Customers-div-para2">UI/UX Designer</p>
              </div>
            </div>
            <p className="Customers-div-para1">
              Project to be a team best option for project management, but when
              all the stars align, it a powerful tool.{" "}
            </p>
          </div>
          {/*<div></div>
            <div></div> */}
        </div>
      </section>
      <hr />
    </>
  );
}

export default Customers;
