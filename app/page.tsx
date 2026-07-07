import Agenda from "@/components/Agenda";
import CommunityBand from "@/components/CommunityBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MembershipSection from "@/components/MembershipSection";
import MissionVision from "@/components/MissionVision";
import Nav from "@/components/Nav";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhySection />
        <MissionVision />
        <MembershipSection />
        <Agenda />
        <CommunityBand />
      </main>
      <Footer />
    </>
  );
}
