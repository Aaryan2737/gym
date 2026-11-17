import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site";
import { getDirectionsUrl, getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";

export function LocationSection() {
  const handleDirectionsClick = () => {
    trackEvent("directions_click", { destination: "Google Maps" });
  };

  return (
    <SectionContainer id="location" dark={true} className="border-b border-neutral-900">
      <SectionHeading
        dark={true}
        eyebrow="Visit The Facility"
        title="Centrally Located in Koregaon Park"
        description="Easy access, valet parking, and prime connectivity in the heart of Pune's athletic hub."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Visual Exterior & Map Directions */}
        <div className="lg:col-span-7 flex flex-col justify-between p-8 bg-[#181818] border border-neutral-800 relative overflow-hidden min-h-[420px]">
          {/* Real High-Resolution Architectural Photography Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/location/facility-exterior.jpg"
              alt="JERAI Athletic Club facility exterior and entrance in Koregaon Park Pune"
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center brightness-40 contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/75 to-black/60" />
          </div>

          <div className="relative z-10 space-y-4 mb-8">
            <span className="inline-block bg-[#111111]/90 text-[#D8FF35] text-xs font-mono font-bold tracking-widest px-3 py-1 uppercase border border-neutral-700 backdrop-blur-sm">
              Athletic Club HQ
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
              {siteConfig.area}, {siteConfig.city}
            </h3>

            <p className="text-sm sm:text-base text-neutral-200 font-mono drop-shadow">
              📍 {siteConfig.address}, {siteConfig.area}, {siteConfig.city}, {siteConfig.state} – {siteConfig.pinCode}
            </p>

            <div className="pt-2 text-xs text-neutral-300 space-y-1 drop-shadow">
              <p>• Landmark: North Main Road intersection, near Osho Teerth Park</p>
              <p>• Parking: Complimentary valet car parking & 2-wheeler bays</p>
              <p>• Transit: 10 mins from Pune Railway Station / Kalyani Nagar bridge</p>
            </div>
          </div>

          <div className="relative z-10 pt-6 border-t border-neutral-700/80 flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="md"
              href={getDirectionsUrl(siteConfig.mapsUrl)}
              external
              onClick={handleDirectionsClick}
            >
              Open in Google Maps ↗
            </Button>

            <Button
              variant="outline-light"
              size="md"
              href={getPhoneUrl(siteConfig.phone)}
            >
              Call Front Desk
            </Button>
          </div>
        </div>

        {/* Right Column: Operating Hours Card */}
        <div className="lg:col-span-5 p-8 bg-[#181818] border border-neutral-800 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#D8FF35] mb-6">
              Floor Timings & Schedule
            </h4>

            <div className="space-y-4 divide-y divide-neutral-800">
              {siteConfig.openingHours.map((schedule, idx) => (
                <div key={idx} className="flex justify-between items-baseline pt-4 first:pt-0">
                  <span className="text-sm font-bold text-white uppercase tracking-wider">
                    {schedule.label}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#D8FF35]">
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 space-y-1.5">
              <p className="font-bold text-white uppercase tracking-wider">
                ⚡ Prime Peak Windows:
              </p>
              <p className="text-neutral-400">
                Morning: 06:30 AM – 09:00 AM • Evening: 06:30 PM – 09:00 PM
              </p>
              <p className="text-[11px] text-neutral-400 font-mono">
                Open on all national holidays with special morning hours.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-8 border-t border-neutral-800">
            <a
              href={getWhatsAppUrl(siteConfig.whatsappNumber, getDefaultWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-xs font-mono font-bold uppercase text-neutral-300 hover:text-[#25D366] transition-colors"
            >
              <span>Instant WhatsApp Concierge →</span>
              <span>Online Now</span>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default LocationSection;
