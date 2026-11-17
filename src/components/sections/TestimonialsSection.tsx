import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/content/testimonials";
import Reveal from "@/components/motion/Reveal";

export function TestimonialsSection() {
  return (
    <SectionContainer id="testimonials" dark={true} className="border-b border-neutral-900">
      <SectionHeading
        dark={true}
        eyebrow="Community Stories"
        title="Disciplined Athletes, Real Milestones"
        description="Here is how dedicated members in Pune describe their experience training at JERAI Athletic Club."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {testimonials.map((t, idx) => (
          <Reveal key={t.id} delay={idx * 0.1} direction="up">
            <div className="flex flex-col justify-between h-full p-8 bg-[#181818] border border-neutral-800 transition-colors duration-200 hover:border-neutral-700">
              <div>
                {/* Header with Avatar and Rating */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800/80">
                  <div className="flex items-center gap-3.5">
                    {t.avatar && (
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D8FF35] bg-neutral-800 shrink-0">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="48px"
                          className="object-cover object-top grayscale contrast-110"
                        />
                      </div>
                    )}
                    <div>
                      <div className="font-bold text-white text-base uppercase tracking-tight">
                        {t.name}
                      </div>
                      <div className="text-[11px] text-neutral-400 font-mono">
                        {t.memberSince}
                      </div>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-[#D8FF35] text-xs" aria-label="5 out of 5 stars">
                    {"★".repeat(t.rating)}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <div className="text-xs text-[#A7A7A7] uppercase tracking-wider font-semibold">
                  {t.role}
                </div>
                <div className="text-[11px] font-mono text-[#D8FF35] mt-2 flex items-center gap-1.5">
                  <span>⚡ Milestone:</span>
                  <span className="font-bold">{t.achievement}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="text-[11px] text-center text-neutral-500 font-mono">
        (Demo Specification: In production, all testimonials include member verification and signed image usage releases).
      </p>
    </SectionContainer>
  );
}

export default TestimonialsSection;
