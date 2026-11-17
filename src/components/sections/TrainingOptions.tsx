import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { trainingOptions } from "@/content/facilities";
import Reveal from "@/components/motion/Reveal";

export function TrainingOptions() {
  return (
    <SectionContainer id="training" dark={false} className="border-b border-neutral-300">
      <SectionHeading
        eyebrow="Training Tracks"
        title="Find The Program That Fits Your Ambition"
        description="From independent barbell athletes to individuals needing structured 1-on-1 coaching and medical-grade nutrition planning."
      />

      <div className="space-y-16 lg:space-y-24">
        {trainingOptions.map((opt, idx) => {
          const isReversed = idx % 2 === 1;

          return (
            <div
              key={opt.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                isReversed ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Media Col */}
              <div
                className={`lg:col-span-6 ${
                  isReversed ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Reveal direction={isReversed ? "left" : "right"}>
                  <div className="relative aspect-[16/11] w-full bg-[#111111] p-3 shadow-xl">
                    <div className="relative w-full h-full overflow-hidden border border-neutral-800">
                      <Image
                        src={opt.image}
                        alt={opt.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center contrast-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4 bg-[#D8FF35] text-[#111111] text-[11px] font-mono font-black px-2.5 py-1 tracking-widest uppercase">
                        Track {String(idx + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Text Col */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  isReversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase block mb-1">
                    {opt.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#111111]">
                    {opt.title}
                  </h3>
                </div>

                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {opt.description}
                </p>

                {/* Features */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#111111] block mb-2">
                    Included with this track:
                  </span>
                  <ul className="space-y-2 text-sm text-neutral-700">
                    {opt.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-[#111111] font-bold text-sm shrink-0">
                          ✓
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-neutral-500 font-mono mb-4">
                    <strong className="text-neutral-700">Recommended for:</strong>{" "}
                    {opt.recommendedFor}
                  </p>

                  <Button variant="secondary" size="md" href="#contact">
                    {opt.ctaLabel} →
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

export default TrainingOptions;
