import Agenda from "@/components/Agenda";
import CommunityBand from "@/components/CommunityBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionVision from "@/components/MissionVision";
import Nav from "@/components/Nav";
import Pillars from "@/components/Pillars";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <MissionVision />
        <Pillars />
        <Agenda />
        <CommunityBand />
      </main>
      <Footer />
    </>
  );
}
