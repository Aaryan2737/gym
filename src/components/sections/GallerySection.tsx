import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

const galleryItems = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Chalked hands gripping competition knurled barbell",
    caption: "Heavy Iron & Barbell Discipline",
    tag: "STRENGTH",
    aspect: "aspect-[4/3] md:col-span-2",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Precision calibrated dumbbell rack under dramatic spotlight",
    caption: "Precision Urethane Dumbbells to 60kg",
    tag: "HARDWARE",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "High-intensity athletic sled push on 20-meter sprint turf",
    caption: "20-Meter Sprint Turf & Prowler Sleds",
    tag: "PERFORMANCE",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Athlete sprint interval on curved non-motorized treadmill",
    caption: "Self-Powered Curved Treadmill Conditioning",
    tag: "ENDURANCE",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Calibrated competition steel weight plates and collars",
    caption: "Calibrated Steel Discs & Eleiko Collars",
    tag: "EQUIPMENT",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Athlete catching breath and refocusing after max effort set",
    caption: "Uncompromising Effort on Every Set",
    tag: "MINDSET",
    aspect: "aspect-[4/3] md:col-span-2",
  },
];

export function GallerySection() {
  return (
    <SectionContainer id="gallery" dark={true} className="border-b border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <SectionHeading
          dark={true}
          eyebrow="Visual Chronicle"
          title="Inside The Training Floor"
          description="A glimpse into the disciplined daily rhythm, calibrated hardware, and intense focus at JERAI."
          className="mb-0"
        />

        <div className="text-left md:text-right shrink-0">
          <span className="inline-block bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-[#D8FF35] px-3.5 py-1.5 uppercase">
            #ForgedInPune
          </span>
        </div>
      </div>

      {/* Responsive Editorial Photo Mosaic */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {galleryItems.map((item, idx) => (
          <Reveal
            key={idx}
            delay={idx * 0.07}
            direction="up"
            className={item.aspect}
          >
            <div className="group relative w-full h-full min-h-[260px] overflow-hidden bg-[#181818] border border-neutral-800 transition-all duration-300 hover:border-neutral-600">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center grayscale contrast-115 brightness-90 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* Tag Pill */}
              <span className="absolute top-3.5 left-3.5 bg-[#111111]/85 border border-neutral-700 text-[#D8FF35] text-[10px] font-mono font-bold tracking-widest px-2.5 py-0.5 uppercase backdrop-blur-xs">
                {item.tag}
              </span>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 transition-transform duration-300">
                <p className="text-xs sm:text-sm font-bold text-white uppercase tracking-tight">
                  {item.caption}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionContainer>
  );
}

export default GallerySection;
