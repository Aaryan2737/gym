import type { Metadata } from "next";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipCard from "@/components/ui/MembershipCard";
import Accordion from "@/components/ui/Accordion";
import { membershipPlans } from "@/content/membership";
import { faqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import EnquirySection from "@/components/sections/EnquirySection";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: `Membership Plans & Fees | ${siteConfig.name}`,
  description:
    "Explore transparent membership tiers with zero hidden charges. Monthly, quarterly, half-yearly, and annual athletic passes in Koregaon Park, Pune.",
};

export default function MembershipPage() {
  const membershipFaqs = faqs.filter(
    (f) => f.category === "membership" || f.category === "policy"
  );

  return (
    <div className="pt-24 sm:pt-32">
      {/* Page Hero with High-Contrast Background Photography */}
      <section className="relative py-20 sm:py-28 bg-[#0c0c0c] text-white border-b border-neutral-800 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/gallery-2.jpg"
            alt="JERAI Athletic Club Calibrated Dumbbells and Lifting Floor"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-25 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-[#0c0c0c]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-5 sm:px-8">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D8FF35] uppercase block mb-3">
            Transparent Pricing in INR
          </span>
          <h1 className="text-h1 text-white font-black uppercase tracking-tight mb-4 drop-shadow">
            Membership Plans
          </h1>
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal drop-shadow">
            No long lock-in contracts or surprise cancellation penalties. Every plan includes full access to all Olympic racks, curved cardio treadmills, and executive steam lockers.
          </p>
        </div>
      </section>

      <Marquee
        words={[
          "FLEXIBLE MONTHLY PASSES",
          "POPULAR QUARTERLY PROTOCOL",
          "ATHLETE HALF-YEARLY",
          "BLACK CARD ANNUAL",
          "ZERO JOINING FEE ON MULTI-MONTH PLANS",
        ]}
        dark={false}
      />

      {/* Plans Section */}
      <SectionContainer dark={false} className="border-b border-neutral-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mb-16">
          {membershipPlans.map((plan) => (
            <MembershipCard key={plan.id} plan={plan} className="h-full" />
          ))}
        </div>

        {/* Supporting Visual Feature: The Member Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Reveal direction="left">
            <div className="relative aspect-[16/9] w-full bg-[#111111] overflow-hidden border border-neutral-300 shadow-md">
              <Image
                src="/images/facilities/changing-rooms.jpg"
                alt="Executive Locker Suite and Steam Bath Amenities"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono font-bold text-[#D8FF35] uppercase tracking-widest block mb-1">
                  Included With Every Tier
                </span>
                <p className="text-sm font-bold uppercase tracking-tight">
                  Keyless Digital Lockers, Rain Showers & Eucalyptus Steam
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative aspect-[16/9] w-full bg-[#111111] overflow-hidden border border-neutral-300 shadow-md">
              <Image
                src="/images/facilities/recovery-suite.jpg"
                alt="Active Recovery Suite with Theragun Percussion and Mobility Stations"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center brightness-90 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono font-bold text-[#D8FF35] uppercase tracking-widest block mb-1">
                  Peak Performance Protocol
                </span>
                <p className="text-sm font-bold uppercase tracking-tight">
                  Theragun Pro Percussion Stations & Guided Mobility Mats
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Membership Policies Summary */}
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            align="center"
            eyebrow="Rules & Inclusions"
            title="Membership Policy & Guarantee"
            description="Clear expectations regarding freeze options, guest passes, and trial credits."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-white p-8 border border-neutral-300 text-sm text-neutral-700 shadow-sm">
            <div>
              <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-2">
                Freeze & Travel Policy
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600">
                Half-yearly members enjoy up to 15 days of membership pause, while annual members can freeze for up to 30 days without medical documentation.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-2">
                Trial Adjustment
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600">
                If you purchase a 1-day guided trial pass (₹499) and decide to enroll within 48 hours, the entire trial amount is credited directly to your dues.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-2">
                Floor Etiquette & Footwear
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600">
                To preserve competition lifting platforms, all lifters must change into clean indoor-only athletic shoes at our reception locker bays.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#111111] uppercase tracking-wider mb-2">
                Taxes & Payment Modes
              </h4>
              <p className="text-xs leading-relaxed text-neutral-600">
                We accept UPI, all major credit/debit cards, and Net Banking. All listed prices are exclusive of 18% GST which will be displayed itemized at billing.
              </p>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Relevant FAQs */}
      <SectionContainer dark={true} className="border-b border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            dark={true}
            align="center"
            eyebrow="Membership Inquiries"
            title="Frequently Asked Questions"
          />
          <Accordion items={membershipFaqs} dark={true} />
        </div>
      </SectionContainer>

      {/* Booking Form */}
      <EnquirySection />
    </div>
  );
}
