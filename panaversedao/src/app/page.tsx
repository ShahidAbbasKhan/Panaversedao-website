import CoreTracks from "@/componets/sections/CoreTracks";
import Hero from "@/componets/sections/Hero";
import SpecializedTracks from "@/componets/sections/SpecializedTracks";
import ProgramOutcome from "@/componets/sections/ProgramOutcome";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Tracks */}
        <CoreTracks />
        {/* Specialized Tracks */}
        <SpecializedTracks />
        {/* Outcome Track */}
        <ProgramOutcome />
      </main>
    </>
  );
}
