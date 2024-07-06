
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />


      {/* <Footer /> */}
    </div>
  );
}
