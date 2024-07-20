
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/work-process";
import About from "@/components/about";



export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <WorkProcess />
      <Footer />


      {/* <Footer /> */}
    </div>
  );
}
