import type { Metadata } from "next";
import SectionContainer from "@/components/layout/SectionContainer";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy and personal data handling commitments for ${siteConfig.name}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 sm:pt-32">
      <SectionContainer dark={true} padding={false} className="py-16 border-b border-neutral-800">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#D8FF35] uppercase block mb-2">
            Legal & Data Governance
          </span>
          <h1 className="text-h2 text-white font-black uppercase tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-neutral-400">
            Last Updated: November 2026 • Demo Specification Wording
          </p>
        </div>
      </SectionContainer>

      <SectionContainer dark={false}>
        <div className="max-w-3xl mx-auto bg-white border border-neutral-300 p-8 sm:p-12 space-y-8 text-neutral-800 leading-relaxed text-sm sm:text-base">
          {/* Demo Disclaimer Alert */}
          <div className="p-4 bg-amber-50 border-l-4 border-amber-500 text-xs sm:text-sm text-amber-900">
            <strong>Demo Specification Notice:</strong> This privacy notice provides the structural data governance framework for this gym website demonstration. Prior to commercial public launch, actual terms must be reviewed and approved by the business owner and legal counsel in compliance with India&apos;s Digital Personal Data Protection (DPDP) Act.
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              1. Information We Collect
            </h2>
            <p>
              When you submit a trial request, membership inquiry, or message our WhatsApp concierge, we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700">
              <li>Full Name</li>
              <li>Mobile Telephone Number (used for WhatsApp and phone updates)</li>
              <li>Training interests (e.g. general gym access, personal coaching, group clinics)</li>
              <li>Preferred workout times or optional health/injury notes you voluntarily submit</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              2. How We Use Your Information
            </h2>
            <p>
              We process personal data solely for genuine gym operational purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-neutral-700">
              <li>To confirm your requested 1-day trial session or facility walkthrough</li>
              <li>To answer questions about membership tiers, trainers, and schedules</li>
              <li>To deliver member onboarding updates and digital gym passes</li>
            </ul>
            <p className="text-sm font-semibold text-[#111111]">
              We do not sell, rent, or lease your personal data or phone number to any third-party marketing brokers or advertisers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              3. Communication Channels & Consent
            </h2>
            <p>
              By checking the consent box on our enquiry form, you authorize {siteConfig.name} to send you service messages via WhatsApp, SMS, or telephone. You may opt out of promotional messages at any time by replying &quot;STOP&quot; on WhatsApp or notifying our front desk.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              4. Data Retention & Deletion
            </h2>
            <p>
              Inquiry records are retained only as long as necessary to facilitate your gym onboarding. If you do not enroll as an active member, your inquiry details are pruned after 90 days. You have the right to request immediate erasure of your data by emailing{" "}
              <a href={`mailto:${siteConfig.email}`} className="font-bold underline text-[#111111]">
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#111111]">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding our privacy practices or data handling, reach our data compliance representative at:
            </p>
            <div className="p-4 bg-neutral-100 text-xs font-mono space-y-1">
              <p><strong>{siteConfig.name}</strong></p>
              <p>Address: {siteConfig.address}, {siteConfig.area}, {siteConfig.city} – {siteConfig.pinCode}</p>
              <p>Email: {siteConfig.email}</p>
              <p>Phone: {siteConfig.phone}</p>
            </div>
          </section>
        </div>
      </SectionContainer>
    </div>
  );
}
