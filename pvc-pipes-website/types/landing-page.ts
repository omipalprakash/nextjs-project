import { HeroBlock } from "./hero";
import { ApplicationsBlock } from "./application";
import { GuaranteeBlock } from "./guarantee";
import { ServicesBlock } from "./services";

export type LandingPage = {
  blocks?: Array<
    HeroBlock | ApplicationsBlock | GuaranteeBlock | ServicesBlock
  >;
};
