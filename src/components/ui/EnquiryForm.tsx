"use client";

import React, { useState } from "react";
import type { EnquiryPayload, EnquirySubmissionResult } from "@/types/site";
import { validateName, validatePhone, validateRequired } from "@/lib/validation";
import { trackEvent } from "@/lib/analytics";
import Button from "./Button";
import Link from "next/link";

export interface EnquiryFormProps {
  defaultInterest?: EnquiryPayload["interest"];
  className?: string;
  dark?: boolean;
}

export function EnquiryForm({
  defaultInterest = "trial",
  className,
  dark = false,
}: EnquiryFormProps) {
  const [formData, setFormData] = useState<EnquiryPayload>({
    name: "",
    phone: "",
    interest: defaultInterest,
    preferredContact: "whatsapp",
    preferredVisitDate: "",
    preferredTimeSlot: "morning",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<EnquirySubmissionResult | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear field-level error on change
    if (errors[name as keyof EnquiryPayload]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryPayload, string>> = {};

    const nameErr = validateName(formData.name);
    if (nameErr) newErrors.name = nameErr;

    const phoneErr = validatePhone(formData.phone);
    if (phoneErr) newErrors.phone = phoneErr;

    const consentErr = validateRequired(formData.consent, "Privacy consent");
    if (consentErr) newErrors.consent = consentErr;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("enquiry_form_start");

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate backend submission delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1400));

      const refCode = `JAC-${Math.floor(1000 + Math.random() * 9000)}`;

      trackEvent("enquiry_form_submit", {
        interest: formData.interest,
        contactMethod: formData.preferredContact,
      });

      setResult({
        ok: true,
        reference: refCode,
        message:
          "Thank you for reaching out! A JERAI concierge will reach out to you within 2 working hours on WhatsApp/Call to confirm your trial slot.",
      });
    } catch {
      setResult({
        ok: false,
        message: "An unexpected error occurred while submitting. Please call or WhatsApp us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phone: "",
      interest: defaultInterest,
      preferredContact: "whatsapp",
      preferredVisitDate: "",
      preferredTimeSlot: "morning",
      message: "",
      consent: false,
    });
    setErrors({});
    setResult(null);
  };

  if (result?.ok) {
    return (
      <div
        className={`p-8 sm:p-10 border text-center ${
          dark ? "bg-[#181818] border-neutral-800 text-white" : "bg-white border-neutral-200 text-[#111111]"
        }`}
      >
        <div className="w-16 h-16 bg-[#D8FF35] text-[#111111] rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6">
          ✓
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tight mb-2">
          Enquiry Received
        </h3>
        <p className="text-xs uppercase font-mono tracking-widest text-[#D8FF35] mb-4">
          Booking Reference: <span className="font-bold underline">{result.reference}</span>
        </p>
        <p
          className={`text-sm leading-relaxed mb-8 max-w-md mx-auto ${
            dark ? "text-[#A7A7A7]" : "text-neutral-600"
          }`}
        >
          {result.message}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="primary"
            size="md"
            href={`https://wa.me/919823000000?text=${encodeURIComponent(
              `Hi JERAI, I just submitted an enquiry (Ref: ${result.reference}).`
            )}`}
            external
          >
            Direct WhatsApp Follow-Up →
          </Button>
          <Button variant="outline" size="md" onClick={resetForm}>
            Submit Another Request
          </Button>
        </div>

        <p className="text-[11px] text-neutral-400 mt-6 font-mono">
          (Demo Notice: In production, this pushes directly to your gym CRM or email webhook).
        </p>
      </div>
    );
  }

  const inputBaseStyle = `w-full px-4 py-3.5 text-base border transition-colors focus:outline-none focus:ring-2 focus:ring-[#D8FF35] rounded-none ${
    dark
      ? "bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500"
      : "bg-[#FAFAFA] border-neutral-300 text-[#111111] placeholder-neutral-400"
  }`;

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`p-6 sm:p-10 border ${
        dark ? "bg-[#161616] border-neutral-800" : "bg-white border-neutral-200"
      } ${className || ""}`}
    >
      <div className="mb-8">
        <h3
          className={`text-2xl font-black uppercase tracking-tight mb-2 ${
            dark ? "text-white" : "text-[#111111]"
          }`}
        >
          Book Your Experience
        </h3>
        <p className={`text-sm ${dark ? "text-[#A7A7A7]" : "text-neutral-600"}`}>
          Schedule a guided facility walk-through or 1-on-1 coaching assessment.
        </p>
      </div>

      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="enquiry-name"
            className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
              dark ? "text-neutral-300" : "text-[#111111]"
            }`}
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="enquiry-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Rahul Sharma"
            autoComplete="name"
            className={`${inputBaseStyle} ${errors.name ? "border-red-500" : ""}`}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label
            htmlFor="enquiry-phone"
            className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
              dark ? "text-neutral-300" : "text-[#111111]"
            }`}
          >
            Mobile Number (India / WhatsApp) <span className="text-red-500">*</span>
          </label>
          <div className="relative flex">
            <span
              className={`inline-flex items-center px-3.5 border border-r-0 text-sm font-mono font-semibold ${
                dark ? "bg-neutral-800 border-neutral-700 text-neutral-300" : "bg-neutral-100 border-neutral-300 text-neutral-700"
              }`}
            >
              +91
            </span>
            <input
              type="tel"
              id="enquiry-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="98230 00000"
              autoComplete="tel"
              className={`${inputBaseStyle} ${errors.phone ? "border-red-500" : ""}`}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone}</p>
          )}
        </div>

        {/* Interest & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="enquiry-interest"
              className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                dark ? "text-neutral-300" : "text-[#111111]"
              }`}
            >
              Primary Interest
            </label>
            <select
              id="enquiry-interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={inputBaseStyle}
            >
              <option value="trial">1-Day Guided Trial Pass</option>
              <option value="membership">Membership Plans & Pricing</option>
              <option value="personal-training">1-on-1 Personal Coaching</option>
              <option value="group-classes">HIIT & Movement Clinics</option>
              <option value="other">General Facility Tour</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="enquiry-timeSlot"
              className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
                dark ? "text-neutral-300" : "text-[#111111]"
              }`}
            >
              Preferred Time Slot
            </label>
            <select
              id="enquiry-timeSlot"
              name="preferredTimeSlot"
              value={formData.preferredTimeSlot}
              onChange={handleChange}
              className={inputBaseStyle}
            >
              <option value="morning">Morning (06:00 AM – 10:00 AM)</option>
              <option value="afternoon">Afternoon (12:00 PM – 04:00 PM)</option>
              <option value="evening">Evening (05:30 PM – 09:30 PM)</option>
            </select>
          </div>
        </div>

        {/* Preferred Contact Method */}
        <div>
          <span
            className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
              dark ? "text-neutral-300" : "text-[#111111]"
            }`}
          >
            Preferred Contact Method
          </span>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
              <input
                type="radio"
                name="preferredContact"
                value="whatsapp"
                checked={formData.preferredContact === "whatsapp"}
                onChange={handleChange}
                className="w-4 h-4 text-[#D8FF35] focus:ring-[#D8FF35]"
              />
              <span className={dark ? "text-neutral-200" : "text-neutral-800"}>WhatsApp (Faster)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
              <input
                type="radio"
                name="preferredContact"
                value="call"
                checked={formData.preferredContact === "call"}
                onChange={handleChange}
                className="w-4 h-4 text-[#D8FF35] focus:ring-[#D8FF35]"
              />
              <span className={dark ? "text-neutral-200" : "text-neutral-800"}>Phone Call</span>
            </label>
          </div>
        </div>

        {/* Optional Message */}
        <div>
          <label
            htmlFor="enquiry-message"
            className={`block text-xs font-bold uppercase tracking-wider mb-2 ${
              dark ? "text-neutral-300" : "text-[#111111]"
            }`}
          >
            Goals or Injuries (Optional)
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder="e.g. Looking to improve strength, previous shoulder strain, etc."
            className={inputBaseStyle}
          />
        </div>

        {/* Consent Checkbox */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="w-4 h-4 mt-1 rounded-none text-[#111111] focus:ring-[#D8FF35]"
            />
            <span
              className={`text-xs leading-relaxed ${
                dark ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              I agree to receive gym details and trial confirmation on WhatsApp or phone. We respect your privacy. Read our{" "}
              <Link
                href="/privacy"
                className="underline text-[#D8FF35] hover:text-white"
                target="_blank"
              >
                Privacy Notice
              </Link>
              .
            </span>
          </label>
          {errors.consent && (
            <p className="text-xs text-red-500 mt-1 font-medium">{errors.consent}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          className="mt-4"
        >
          {isSubmitting ? "Processing Enquiry..." : "Request Trial Pass Now →"}
        </Button>

        <p className="text-[11px] text-center text-neutral-400 font-mono">
          Demo Mode: Submissions generate an instant verification reference code.
        </p>
      </div>
    </form>
  );
}

export default EnquiryForm;
