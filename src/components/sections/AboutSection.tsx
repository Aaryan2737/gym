import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export function AboutSection() {
  return (
    <SectionContainer id="about" dark={false} className="border-b border-neutral-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Storytelling */}
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="A Sanctuary Built For Serious Athletic Intent"
            description="We rejected the typical crowded commercial gym model. JERAI is engineered from the ground up to give committed lifters the space, equipment, and expert coaching they need to make tangible progress."
          />

          <div className="space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-normal mb-8">
            <p>
              Whether you are an executive training before sunrise, an athlete peaking for competition, or a beginner seeking patient biomechanics instruction—our environment promotes focus and discipline over gimmicks.
            </p>
            <p>
              Every barbell is calibrated, every dumbbell rack is organized, and our capped floor capacity ensures you never spend your workout queueing for a bench or squat cage.
            </p>
          </div>

          {/* Pillars List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-white border border-neutral-300 shadow-2xs">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase block mb-1">
                01. Calibrated Iron
              </span>
              <p className="text-xs text-neutral-600">
                Eleiko and Bullroc steel discs, specialized bars, and true Olympic platforms.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-300 shadow-2xs">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase block mb-1">
                02. Intelligent Flow
              </span>
              <p className="text-xs text-neutral-600">
                Spacious layout engineered to prevent floor bottlenecking at peak hours.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-300 shadow-2xs">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase block mb-1">
                03. Verified Coaches
              </span>
              <p className="text-xs text-neutral-600">
                100% credentialed specialists in powerlifting, mobility, and nutrition.
              </p>
            </div>

            <div className="p-4 bg-white border border-neutral-300 shadow-2xs">
              <span className="text-xs font-mono font-bold tracking-widest text-[#111111] uppercase block mb-1">
                04. Clinical Hygiene
              </span>
              <p className="text-xs text-neutral-600">
                Strict indoor-shoe protocol, fresh towel services, and continuous sanitation.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="secondary" size="md" href="#facilities">
              Explore Our Facilities →
            </Button>
            <Button variant="outline" size="md" href="#contact">
              Schedule a Walkthrough
            </Button>
          </div>
        </div>

        {/* Right Column: Editorial Visual Showcase */}
        <div className="lg:col-span-5">
          <Reveal direction="left">
            <div className="relative aspect-[4/5] w-full bg-[#111111] p-3 sm:p-4 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden border border-neutral-800">
                <Image
                  src="/images/about/about-philosophy.jpg"
                  alt="Disciplined athlete preparing barbell with chalk at JERAI Athletic Club"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center contrast-110 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                {/* Floating Stat Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/95 border border-neutral-700 p-5 text-white backdrop-blur-md">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#D8FF35] uppercase block mb-1">
                    Capped Member Capacity
                  </span>
                  <p className="text-sm font-bold text-neutral-200">
                    We intentionally cap admissions to preserve floor dignity and coaching quality.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
