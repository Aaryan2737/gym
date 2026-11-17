import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { siteConfig } from "@/content/site";
import { getPhoneUrl, getWhatsAppUrl } from "@/lib/utils";
import { getDefaultWhatsAppMessage } from "@/lib/whatsapp";

export function EnquirySection() {
  return (
    <SectionContainer id="contact" dark={false} className="bg-[#EFECE4]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Proposition */}
        <div className="lg:col-span-5 space-y-6">
          <SectionHeading
            eyebrow="Take The First Step"
            title="Book Your Trial Visit or Coaching Assessment"
            description="Experience our Olympic-grade platforms, meet our coaches, and see why Pune's most dedicated athletes call JERAI their home."
          />

          <div className="space-y-4 text-sm text-neutral-700">
            <div className="flex items-start gap-3 p-4 bg-white border border-neutral-300">
              <span className="text-xl font-bold text-[#111111]">1</span>
              <div>
                <strong className="block text-neutral-900 uppercase text-xs font-mono tracking-wider">
                  Select Your Preferred Time
                </strong>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Submit the form with your goals and preferred slot.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-neutral-300">
              <span className="text-xl font-bold text-[#111111]">2</span>
              <div>
                <strong className="block text-neutral-900 uppercase text-xs font-mono tracking-wider">
                  Concierge Confirmation
                </strong>
                <p className="text-xs text-neutral-600 mt-0.5">
                  We WhatsApp or call you within 2 working hours to confirm your pass.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-white border border-neutral-300">
              <span className="text-xl font-bold text-[#111111]">3</span>
              <div>
                <strong className="block text-neutral-900 uppercase text-xs font-mono tracking-wider">
                  Train With Intent
                </strong>
                <p className="text-xs text-neutral-600 mt-0.5">
                  Enjoy full floor privileges, coach consultation, and locker amenities.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="pt-4 border-t border-neutral-300 text-xs font-mono space-y-2">
            <p className="text-neutral-500 uppercase tracking-widest font-bold">
              Prefer Immediate Direct Contact?
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl(siteConfig.whatsappNumber, getDefaultWhatsAppMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#16794A] font-bold hover:underline"
              >
                💬 WhatsApp: {siteConfig.phone}
              </a>
              <a
                href={getPhoneUrl(siteConfig.phone)}
                className="inline-flex items-center gap-2 text-neutral-800 font-bold hover:underline"
              >
                📞 Phone: {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Lead Form */}
        <div className="lg:col-span-7 shadow-xl">
          <EnquiryForm dark={false} />
        </div>
      </div>
    </SectionContainer>
  );
}

export default EnquirySection;
