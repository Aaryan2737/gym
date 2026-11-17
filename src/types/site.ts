export type GymSiteConfig = {
  name: string;
  tagline: string;
  description: string;
  city: string;
  area: string;
  address: string;
  pinCode: string;
  state: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  mapsUrl: string;
  openingHours: Array<{ label: string; hours: string }>;
  socialLinks: Array<{ platform: string; label: string; href: string }>;
};

export type QuickFact = {
  label: string;
  value: string;
  description?: string;
  icon?: "location" | "clock" | "area" | "coach";
};

export type MembershipPlan = {
  id: string;
  name: string;
  durationLabel: string;
  priceInr: number;
  billingLabel: string;
  inclusions: string[];
  exclusions?: string[];
  joiningFeeInr?: number;
  taxNote?: string;
  enquiryLabel: string;
  recommended?: boolean;
  highlightTag?: string;
};

export type TrainerProfile = {
  id: string;
  name: string;
  role: string;
  image: string;
  qualifications: string[];
  experienceLabel: string;
  bio: string;
  specialties: string[];
};

export type Facility = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  tag?: string;
};

export type TrainingOption = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  ctaLabel: string;
  recommendedFor: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
  category?: "membership" | "facility" | "training" | "policy";
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  memberSince: string;
  quote: string;
  achievement: string;
  rating: number;
  avatar?: string;
  isDemoNotice?: string;
};

export type NavItem = {
  label: string;
  href: string;
  isExternal?: boolean;
};

export type EnquiryPayload = {
  name: string;
  phone: string;
  interest: "membership" | "personal-training" | "group-classes" | "trial" | "other";
  preferredContact: "call" | "whatsapp";
  preferredVisitDate?: string;
  preferredTimeSlot?: string;
  message?: string;
  consent: boolean;
};

export type EnquirySubmissionResult = {
  ok: boolean;
  reference?: string;
  message: string;
};
