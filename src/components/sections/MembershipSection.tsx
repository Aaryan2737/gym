import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import MembershipCard from "@/components/ui/MembershipCard";
import { membershipPlans, membershipFaqSummary } from "@/content/membership";
import Reveal from "@/components/motion/Reveal";

export function MembershipSection() {
  return (
    <SectionContainer id="membership" dark={false} className="border-b border-neutral-300">
      <SectionHeading
        align="center"
        eyebrow="Membership Tiers"
        title="Straightforward Pricing. Zero Hidden Fees."
        description="Choose the commitment level that fits your goals. Every plan gives you full access to all lifting platforms, cardio equipment, and steam facilities."
      />

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch mb-12">
        {membershipPlans.map((plan, idx) => (
          <Reveal key={plan.id} delay={idx * 0.08} direction="up" className="flex">
            <MembershipCard plan={plan} className="w-full" />
          </Reveal>
        ))}
      </div>

      {/* Trust Summary Strip */}
      <div className="bg-white border border-neutral-300 p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#111111] mb-3 text-center sm:text-left">
          JERAI Membership Commitments:
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-600">
          {membershipFaqSummary.map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#16794A] font-bold shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export default MembershipSection;
