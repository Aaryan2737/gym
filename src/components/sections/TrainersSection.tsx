import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import TrainerCard from "@/components/ui/TrainerCard";
import { trainers } from "@/content/trainers";
import Reveal from "@/components/motion/Reveal";

export function TrainersSection() {
  return (
    <SectionContainer id="trainers" dark={true} className="border-b border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          dark={true}
          eyebrow="Coaching Roster"
          title="Practitioners, Not Sales Reps"
          description="Every trainer on our floor holds internationally recognized certifications and possesses competitive lifting or athletic background."
          className="mb-0"
        />

        <div className="text-left md:text-right shrink-0">
          <span className="inline-block bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400 px-3 py-1.5 uppercase">
            1:1 Coach-to-Athlete Focus
          </span>
        </div>
      </div>

      {/* Grid of Coaches */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {trainers.map((trainer, idx) => (
          <Reveal key={trainer.id} delay={idx * 0.08} direction="up">
            <TrainerCard trainer={trainer} />
          </Reveal>
        ))}
      </div>

      {/* Trust Notice */}
      <div className="mt-12 p-4 bg-neutral-900/60 border border-neutral-800/80 text-center">
        <p className="text-xs text-neutral-400 font-mono">
          Demo Specification Note: In production, all trainer credentials, accreditations, and athlete photos are verified with signed consent.
        </p>
      </div>
    </SectionContainer>
  );
}

export default TrainersSection;
