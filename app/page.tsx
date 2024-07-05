import Image from "next/image";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Services } from "@/components/Services";


export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <Services />
      <Footer />


      {/* <Footer /> */}
    </div>
  );
}
