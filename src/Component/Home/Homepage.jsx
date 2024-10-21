import Hero from "../Home/Hero";
import Affordable from "./Affordable";
import Customers from "./Customers";
import Easiest from "./Easiest";
import Features from "./Features";
import Iconbg from "./Iconbg";
import Organize from "./Organize";
import Seprate from "./Seprate";

function Homepage() {
  return (
    <>
      <Hero />
      <Iconbg />
      <Organize />
      <Seprate />
      <Easiest />
      <Features />
      <Affordable />
      <Customers />
    </>
  );
}

export default Homepage;
