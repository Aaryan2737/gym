import type { Metadata } from "next";
import SectionContainer from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Membership rules, facility policies, and terms of service for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <SectionContainer dark={true} padding={false} className="py-16 border-b border-neutral-800">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D8FF35] uppercase block mb-2">
            Facility Rules & Member Agreement
          </span>
          <h1 className="text-h2 text-white font-black uppercase tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="text-xs font-mono text-neutral-400">
            Last Updated: November 2026 • Demo Specification Terms
          </p>
        </div>
      </SectionContainer>

      <SectionContainer dark={false}>
        <div className="max-w-3xl mx-auto bg-white border border-neutral-300 p-8 sm:p-12 space-y-8 text-neutral-800 leading-relaxed text-sm sm:text-base">
          {/* Demo Disclaimer Alert */}
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900">
            <strong>Demo Specification Notice:</strong> These terms illustrate the operational rules and member guidelines for this gym website demonstration. Prior to commercial operation, all legal policies must be customized and formally ratified by the gym proprietor.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              1. Membership & Validity
            </h2>
            <p>
              Membership is personal to the registered athlete and is non-transferable and non-refundable, except as explicitly provided under our written freeze policies. Multi-month plans run strictly according to the calendar duration chosen (1, 3, 6, or 12 months) from the activation date.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              2. Facility Footwear & Hygiene Protocol
            </h2>
            <p>
              To safeguard floor hygiene and prolong the calibrated surfaces of our Olympic lifting platforms and turf tracks:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700">
              <li>Outdoor footwear must be exchanged for clean, indoor-only athletic training shoes at the reception shoe bays.</li>
              <li>Members must carry and use a workout sweat towel during training.</li>
              <li>Equipment, barbell collars, and dumbbells must be re-racked in their designated bays after use.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              3. Physical Readiness & Health Disclaimer
            </h2>
            <p>
              Physical exercise, heavy barbell training, and high-intensity interval conditioning carry inherent risk of physical exertion and injury. Members affirm that they are in adequate physical condition or have consulted a licensed medical physician prior to commencing heavy training. {siteConfig.name} coaches provide instruction on movement technique, but cannot replace personalized medical counsel.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              4. Freeze & Travel Allowances
            </h2>
            <p>
              Membership freeze privileges are available on 6-month (up to 15 days) and 12-month (up to 30 days) tiers. Requests must be submitted via email or written WhatsApp notification at least 48 hours prior to the requested start date. Retroactive freeze requests are not permitted.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              5. Minimum Age & Guardian Consent
            </h2>
            <p>
              Members must be at least 16 years of age. Applicants aged 16 to 18 require countersigned parental/guardian consent prior to exercising on the training floor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              6. Governance
            </h2>
            <p>
              These guidelines are governed by the laws of India, with jurisdiction in Pune, Maharashtra.
            </p>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
