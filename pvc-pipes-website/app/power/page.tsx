import { getLandingPage } from "@/lib/getLandingPage";
import { ApplicationsBlock } from "@/types/application";
import Power from "@/components/Home/Power/Power";

export default async function PowerPage() {
  const landingPage = await getLandingPage();

  const powerBlock = landingPage.blocks?.find(
    (block): block is ApplicationsBlock =>
      block.__component === "blocks.card-grid" && block.section_type === "power"
  );

  if (!powerBlock) {
    return (
      <section className="min-h-screen">
        <div className="container py-10">
          <h1 className="text-2xl font-bold text-red-600">
            Power content not found
          </h1>
        </div>
      </section>
    );
  }

  return <Power data={powerBlock} />;
}
