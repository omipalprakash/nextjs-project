import Home from "@/components/Home/Home";
import { getLandingPage } from "@/lib/getLandingPage";
import { HeroBlock } from "@/types/hero";
import { ApplicationsBlock } from "@/types/application";
import { GuaranteeBlock } from "@/types/guarantee";

export default async function HomePage() {
  const landingPage = await getLandingPage();

  const heroBlock = landingPage.blocks?.find(
    (block): block is HeroBlock => block.__component === "blocks.hero"
  );

  const applicationsBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid"
  );
  const guaranteeBlock = landingPage.blocks?.find(
    (block): block is GuaranteeBlock => block.__component === "blocks.guarantee"
  );
  const supportBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid"
  );
  return (
    <Home
      hero={heroBlock}
      applications={applicationsBlock}
      guarantee={guaranteeBlock}
      support={supportBlock}
    />
  );
}
