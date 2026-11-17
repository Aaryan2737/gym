import type { GymSiteConfig, QuickFact } from "@/types/site";

export const siteConfig: GymSiteConfig = {
  name: "JERAI ATHLETIC CLUB",
  tagline: "FORGE YOUR STRENGTH",
  description:
    "A premier high-performance strength and conditioning destination in Koregaon Park, Pune. Built for disciplined individuals seeking elite coaching, calibrated equipment, and a serious training community.",
  city: "Pune",
  area: "Koregaon Park",
  address: "Plot 42, North Main Road, Koregaon Park (Demo Location)",
  pinCode: "411001",
  state: "Maharashtra",
  phone: "+91 98230 00000",
  whatsappNumber: "919823000000",
  email: "contact@jeraiathletic.demo",
  mapsUrl: "https://maps.google.com/?q=Koregaon+Park+Pune",
  openingHours: [
    { label: "Monday – Friday", hours: "05:30 AM – 10:30 PM" },
    { label: "Saturday", hours: "06:00 AM – 10:00 PM" },
    { label: "Sunday", hours: "07:00 AM – 02:00 PM" },
  ],
  socialLinks: [
    { platform: "Instagram", label: "@jeraiathletic.pune", href: "https://instagram.com" },
    { platform: "YouTube", label: "JERAI Athletic Club", href: "https://youtube.com" },
    { platform: "WhatsApp", label: "Direct Concierge", href: "https://wa.me/919823000000" },
  ],
};

export const quickFacts: QuickFact[] = [
  {
    label: "Prime Location",
    value: "Koregaon Park, Pune",
    description: "North Main Road • Valet Parking",
    icon: "location",
  },
  {
    label: "Daily Hours",
    value: "05:30 AM – 10:30 PM",
    description: "Open 7 Days a Week",
    icon: "clock",
  },
  {
    label: "Training Floor",
    value: "10,000+ SQ FT",
    description: "Multi-Zone Olympic Grade Rig",
    icon: "area",
  },
  {
    label: "Coaching Staff",
    value: "100% Certified",
    description: "CSCS • CrossFit • Sports Nutrition",
    icon: "coach",
  },
];
