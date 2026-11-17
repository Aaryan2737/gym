import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { facilities } from "@/content/facilities";
import Reveal from "@/components/motion/Reveal";

export function FacilitiesSection() {
  return (
    <SectionContainer id="facilities" dark={true}>
      <SectionHeading
        dark={true}
        eyebrow="The Training Floor"
        title="Engineered Spaces & Calibrated Hardware"
        description="Every zone is purpose-built to eliminate friction between your workout plan and total physical execution."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((fac, idx) => (
          <Reveal key={fac.id} delay={idx * 0.08} direction="up">
            <div className="group flex flex-col h-full bg-[#181818] border border-neutral-800 transition-all duration-300 hover:border-neutral-600 hover:shadow-xl">
              {/* Media Card */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center grayscale contrast-115 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80" />

                {/* Zone Tag */}
                {fac.tag && (
                  <span className="absolute top-4 right-4 bg-[#111111]/90 border border-neutral-700 text-[#D8FF35] text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase">
                    {fac.tag}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#D8FF35] transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A7A7] leading-relaxed mb-6">
                    {fac.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-4 border-t border-neutral-800/80">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {fac.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[#D8FF35] font-bold">›</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default FacilitiesSection;
