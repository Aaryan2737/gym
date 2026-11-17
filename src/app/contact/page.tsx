import type { Metadata } from "next";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import LocationSection from "@/components/sections/LocationSection";
import EnquirySection from "@/components/sections/EnquirySection";
import { siteConfig } from "@/content/site";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: `Contact & Directions | ${siteConfig.name}`,
  description: `Find JERAI Athletic Club in Koregaon Park, Pune. View opening hours, contact desk numbers, WhatsApp concierge, and schedule your trial visit.`,
};

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-32">
      {/* Hero Header with Background Photography */}
      <section className="relative py-20 sm:py-28 bg-[#0c0c0c] text-white border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/location/facility-exterior.jpg"
            alt="JERAI Athletic Club Koregaon Park Pune"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-25 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto px-5 sm:px-8">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D8FF35] uppercase block mb-3">
            Visit or Get in Touch
          </span>
          <h1 className="text-h1 text-white font-black uppercase tracking-tight mb-4 drop-shadow">
            Contact & Location
          </h1>
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal drop-shadow">
            Located on North Main Road in Koregaon Park, Pune. Reach out via WhatsApp, phone, or drop by during our daily training hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <SectionContainer dark={false} className="border-b border-neutral-300">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-white border border-neutral-300 shadow-2xs">
            <span className="text-2xl mb-2 block">💬</span>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
              WhatsApp Concierge
            </h3>
            <p className="text-xs text-neutral-600 mb-3">
              Fastest response for trial slots, questions, and visitor registration.
            </p>
            <a
              href={getWhatsAppUrl(siteConfig.whatsappNumber, getDefaultWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#16794A] hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>

          <div className="p-6 bg-white border border-neutral-300 shadow-2xs">
            <span className="text-2xl mb-2 block">📞</span>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
              Front Desk Phone
            </h3>
            <p className="text-xs text-neutral-600 mb-3">
              Speak directly with our club manager between 6:00 AM and 10:00 PM.
            </p>
            <a
              href={getPhoneUrl(siteConfig.phone)}
              className="text-xs font-bold text-[#111111] hover:underline"
            >
              Call {siteConfig.phone} →
            </a>
          </div>

          <div className="p-6 bg-white border border-neutral-300 shadow-2xs">
            <span className="text-2xl mb-2 block">✉️</span>
            <h3 className="font-bold uppercase tracking-wider text-sm mb-1">
              Email Inquiries
            </h3>
            <p className="text-xs text-neutral-600 mb-3">
              For corporate partnerships, trainer applications, or feedback.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-xs font-bold text-[#111111] hover:underline"
            >
              {siteConfig.email} →
            </a>
          </div>
        </div>
      </SectionContainer>

      {/* Location Section */}
      <LocationSection />

      {/* Lead Form */}
      <EnquirySection />
    </div>
  );
}
