import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Page-wide ambient lighting — fixed so it persists as a backdrop while scrolling */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        {/* Primary top-center violet bloom — anchors the hero */}
        <div className="absolute -top-60 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full bg-violet-600/[0.06] blur-[140px]" />
        {/* Secondary bottom-right indigo accent — adds depth for lower sections */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[700px] translate-x-1/3 translate-y-1/3 rounded-full bg-indigo-700/[0.05] blur-[120px]" />
      </div>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
