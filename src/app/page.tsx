import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import QuickFacts from "@/components/sections/QuickFacts";
import AboutSection from "@/components/sections/AboutSection";
import FacilitiesSection from "@/components/sections/FacilitiesSection";
import TrainingOptions from "@/components/sections/TrainingOptions";
import TrainersSection from "@/components/sections/TrainersSection";
import GallerySection from "@/components/sections/GallerySection";
import MembershipSection from "@/components/sections/MembershipSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import LocationSection from "@/components/sections/LocationSection";
import EnquirySection from "@/components/sections/EnquirySection";
import Marquee from "@/components/motion/Marquee";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Highlights */}
      <QuickFacts />

      {/* 3. Text Ticker */}
      <Marquee
        words={[
          "FORGE YOUR STRENGTH",
          "OLYMPIC POWER CAGES",
          "WOODWAY CURVED TRACKS",
          "CALIBRATED IRON",
          "NO CROWDING",
          "KOREGAON PARK • PUNE",
        ]}
        dark={true}
      />

      {/* 4. About & Philosophy */}
      <AboutSection />

      {/* 5. Facilities & Equipment */}
      <FacilitiesSection />

      {/* 6. Training Options */}
      <TrainingOptions />

      {/* 7. Second Accent Marquee */}
      <Marquee
        words={[
          "100% CERTIFIED COACHES",
          "SPORTS NUTRITION",
          "RECOVERY SUITE",
          "STEAM ROOM",
          "VALET PARKING",
          "05:30 AM EARLY OPENING",
        ]}
        dark={false}
      />

      {/* 8. Trainers Roster */}
      <TrainersSection />

      {/* 9. Visual Gallery Mosaic */}
      <GallerySection />

      {/* 10. Membership Plans & Pricing */}
      <MembershipSection />

      {/* 11. Community Feedback */}
      <TestimonialsSection />

      {/* 12. FAQ Accordion */}
      <FAQSection />

      {/* 13. Location & Hours */}
      <LocationSection />

      {/* 14. Primary Lead & Trial Form */}
      <EnquirySection />
    </>
  );
}
