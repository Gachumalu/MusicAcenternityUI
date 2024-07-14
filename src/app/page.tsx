import BoxesBg from "@/components/BoxesBg";
import Card from "@/components/Card";
import HeroSection from "@/components/HeroSection";

import ScrollBar from "@/components/ScrollBar";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WabyBG from "@/components/WabyBG";

export default function Home() {
  return (
    <>
      <main className=" min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
        <HeroSection />
        <Card />
        <ScrollBar />
        <BoxesBg />
        <UpcomingWebinars />
        <WabyBG />
      </main>
    </>
  );
}
