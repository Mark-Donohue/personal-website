import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl px-4 sm:px-6">
      <Hero />
      <About />
    </main>
  );
}
