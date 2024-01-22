import Image from "next/image";
import hero from "./components/HeroSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import ActiveSlider from "./components/ActiveSlider";
import Services from "./components/Services";
import TalentHiring from "./components/TalentHiring";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-[#b8c4e0] to-[#e8cccc] ">
        <Navbar />
      <div className="container mt-32 lg:mt-40 mx-auto px-4 lg:px-12  py-4 ">
      <HeroSection />
      </div>
      <div className="container mx-auto px-4 lg:px-12  py-4 ">
      <About />
      </div>
      <ActiveSlider />
      <div className="container mx-auto px-4 lg:px-10  py-4 pb-0">
        <Services />
        </div>
        <TalentHiring />
    </main>
  );
}
