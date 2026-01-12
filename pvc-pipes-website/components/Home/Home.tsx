import { HeroBlock } from "@/types/hero";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";

import Hero from "./Hero/Hero";
import Applications from "./Applications/Applications";
import GuaranteeSection from "./GuaranteeSection/GuaranteeSection";
import Support from "./Support/Support";
import Services from "./Services/Services";
import Strength from "./Strength/Strength";
import Power from "./Power/Power";

type HomeProps = {
  hero?: HeroBlock;
  applications?: ApplicationsBlock;
  guarantee?: GuaranteeBlock;
  support?: ApplicationsBlock;
};

const Home = ({ hero, applications, guarantee, support }: HomeProps) => {
  return (
    <div className="overflow-hidden">
      {hero && <Hero data={hero} />}
      {applications && <Applications data={applications} />}
      {guarantee && <GuaranteeSection data={guarantee} />}
      {support && <Support data={support} />}
      <Services />
      <Strength />
      <Power />
    </div>
  );
};

export default Home;
