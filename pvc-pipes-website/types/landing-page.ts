import { HeroBlock } from "./hero";
import { ApplicationsBlock } from "./application";
import { GuaranteeBlock } from "./guarantee";

export type LandingPage = {
  blocks?: Array<HeroBlock | ApplicationsBlock | GuaranteeBlock>;
};
