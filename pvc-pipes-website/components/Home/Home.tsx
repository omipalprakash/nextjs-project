import Hero from "./Hero/Hero";
import Applications from "./Applications/Applications";
import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";
import Support from "./Support/Support";
import Services from "./Services/Services";
import Strength from "./Strength/Strength";
import Power from "./Power/Power";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Applications />
      <GuaranteeSection />
      <Support />
      <Services />
      <Strength />
      <Power />
    </div>
  );
};

export default Home;
