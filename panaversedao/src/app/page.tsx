import CoreTracks from "@/componets/sections/CoreTracks";
import Hero from "@/componets/sections/Hero";
import React from "react";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero Section */}
        <Hero />
        {/* Core Tracks */}
        <CoreTracks />
      </main>
    </>
  );
}
