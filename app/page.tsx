import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import SolutionsSection from "@/components/SolutionsSection";
import TrustedSection from "@/components/TrustedSection";
import TestimonySection from "@/components/TestimonySection";
import PluginsSection from "@/components/PluginsSection";
import ReadySection from "@/components/ReadySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <VideoSection/>
      <TrustSection/>
      <AboutSection/>
      <SolutionsSection/>
      <TrustedSection/>
      <TestimonySection/>
      <PluginsSection/>
      <ReadySection/>
      <Footer/>
    </div>
  );
}
