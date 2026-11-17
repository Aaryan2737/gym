import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/content/faqs";
import Button from "@/components/ui/Button";

export function FAQSection() {
  return (
    <SectionContainer id="faq" dark={false} className="border-b border-neutral-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Intro */}
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Everything You Need To Know Before Joining"
            description="Clear, transparent answers about our floor rules, fees, hours, trial visits, and membership freeze policies."
          />

          <div className="p-6 bg-white border border-neutral-300 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#111111]">
              Have a Specific Inquiry?
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Our front desk concierge is active 7 days a week to clarify personalized training slots or group corporate plans.
            </p>
            <Button
              variant="outline"
              size="sm"
              href="#contact"
              fullWidth
            >
              Ask Our Concierge →
            </Button>
          </div>
        </div>

        {/* Right Accordion */}
        <div className="lg:col-span-8">
          <Accordion items={faqs} dark={false} />
        </div>
      </div>
    </SectionContainer>
  );
}

export default FAQSection;
