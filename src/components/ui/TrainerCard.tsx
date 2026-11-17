import React from "react";
import Image from "next/image";
import type { TrainerProfile } from "@/types/site";
import { cn } from "@/lib/utils";

export interface TrainerCardProps {
  trainer: TrainerProfile;
  className?: string;
}

export function TrainerCard({ trainer, className }: TrainerCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col bg-[#181818] border border-neutral-800 overflow-hidden transition-all duration-300 hover:border-neutral-600 shadow-md",
        className
      )}
    >
      {/* Image Container with Editorial Aspect Ratio */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
        <Image
          src={trainer.image}
          alt={`Coach ${trainer.name} - ${trainer.role}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-top grayscale contrast-110 brightness-95 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
        />

        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-85" />

        {/* Experience Badge */}
        <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm border border-neutral-700 text-[#D8FF35] text-[11px] font-mono font-bold tracking-widest px-2.5 py-1 uppercase">
          {trainer.experienceLabel}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1 group-hover:text-[#D8FF35] transition-colors">
            {trainer.name}
          </h3>
          <p className="text-xs font-semibold text-[#D8FF35] uppercase tracking-wider mb-4">
            {trainer.role}
          </p>

          <p className="text-sm text-[#A7A7A7] leading-relaxed mb-4 line-clamp-3">
            {trainer.bio}
          </p>
        </div>

        <div>
          {/* Credentials */}
          <div className="pt-4 border-t border-neutral-800/80 mb-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 block mb-2">
              Verified Certifications:
            </span>
            <ul className="space-y-1">
              {trainer.qualifications.map((q, idx) => (
                <li
                  key={idx}
                  className="text-xs text-neutral-300 flex items-start gap-1.5"
                >
                  <span className="text-[#D8FF35] font-bold">›</span>
                  <span className="line-clamp-1">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties Pills */}
          <div className="flex flex-wrap gap-1.5">
            {trainer.specialties.map((spec, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] uppercase font-semibold tracking-wider bg-neutral-800 text-neutral-300 px-2 py-0.5 border border-neutral-700/60"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerCard;
