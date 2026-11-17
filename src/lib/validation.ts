/**
 * Validates a person's name (at least 2 characters, letters, spaces, hyphens)
 */
export function validateName(name: string): string | null {
  const trimmed = name.trim();
  if (!trimmed) {
    return "Please enter your full name.";
  }
  if (trimmed.length < 2) {
    return "Name must be at least 2 characters long.";
  }
  if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
    return "Name contains invalid characters.";
  }
  return null;
}

/**
 * Validates an Indian mobile phone number (supports with or without +91, 10 digits)
 * Also accepts standard international format if prefixed with +
 */
export function validatePhone(phone: string): string | null {
  const trimmed = phone.trim();
  if (!trimmed) {
    return "Please provide your mobile number for WhatsApp or call updates.";
  }

  // Remove common separators like spaces, dashes, parentheses
  const cleaned = trimmed.replace(/[\s\-()]/g, "");

  // Check Indian mobile: optionally starting with +91 or 0, followed by 10 digits starting with 6, 7, 8, 9
  const indianRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
  // General international: starting with + and 8-15 digits
  const intlRegex = /^\+\d{8,15}$/;

  if (indianRegex.test(cleaned) || intlRegex.test(cleaned)) {
    return null;
  }

  return "Please enter a valid 10-digit mobile number (e.g. 98230 00000).";
}

/**
 * Validates generic required fields
 */
export function validateRequired(value: string | boolean | undefined | null, fieldLabel: string): string | null {
  if (value === undefined || value === null) {
    return `${fieldLabel} is required.`;
  }
  if (typeof value === "string" && !value.trim()) {
    return `${fieldLabel} is required.`;
  }
  if (typeof value === "boolean" && !value) {
    return `You must accept ${fieldLabel.toLowerCase()} to continue.`;
  }
  return null;
}
