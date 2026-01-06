import Header from "@/components/Home/Header/Header";

export default function Page() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to JM Eagle</h1>
        <p className="text-gray-600 text-lg">
          Explore our comprehensive range of PVC pipes and fittings.
        </p>
      </main>
    </>
  );
}
