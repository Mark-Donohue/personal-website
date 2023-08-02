import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl md:max-w-5xl px-4 sm:px-6">
      <Hero />
      <About />
      <Experience />
    </main>
  );
}
