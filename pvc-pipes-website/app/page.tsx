import Home from "@/components/Home/Home";
import { getLandingPage } from "@/lib/getLandingPage";
import { HeroBlock } from "@/types/hero";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";
import { ServicesBlock } from "@/types/services";

export default async function HomePage() {
  const landingPage = await getLandingPage();

  const heroBlock = landingPage.blocks?.find(
    (block): block is HeroBlock => block.__component === "blocks.hero"
  );

  const guaranteeBlock = landingPage.blocks?.find(
    (block): block is GuaranteeBlock => block.__component === "blocks.guarantee"
  );

  const servicesBlock = landingPage.blocks?.find(
    (b): b is ServicesBlock => b.__component === "blocks.services"
  );

  const cardGridBlocks = landingPage.blocks?.filter(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid"
  );

  const applicationsBlock = cardGridBlocks?.find(
    (b) => b.section_type === "applications"
  );

  const supportBlock = cardGridBlocks?.find(
    (b) => b.section_type === "support"
  );

  const performanceBlock = cardGridBlocks?.find(
    (b) => b.section_type === "performance"
  );

  const powerBlock = cardGridBlocks?.find((b) => b.section_type === "power");

  return (
    <Home
      hero={heroBlock}
      applications={applicationsBlock}
      guarantee={guaranteeBlock}
      support={supportBlock}
      strength={performanceBlock}
      services={servicesBlock}
      power={powerBlock}
    />
  );
}
