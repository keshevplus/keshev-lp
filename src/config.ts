// This page is standalone: it has no backend of its own. It talks directly
// to the shared keshevplus platform for form submissions (which show up in
// the same admin/CRM as the main site) and links out to admin for staff.
const IS_DEV = import.meta.env.DEV;

// In dev, default to a relative path so requests go through the Vite proxy
// (see vite.config.ts) to a locally running keshevplus backend - same-origin,
// no CORS setup needed. Override with VITE_API_BASE_URL to hit a real API.
export const API_URL =
  import.meta.env.VITE_API_BASE_URL || (IS_DEV ? '' : 'https://api.keshevplus.com');

export const ADMIN_DASHBOARD_URL = import.meta.env.VITE_ADMIN_DASHBOARD_URL || 'https://admin.keshevplus.com';

export const PHONE_DISPLAY = import.meta.env.VITE_PHONE_DISPLAY || '055-27-399-27';
export const PHONE_TEL = import.meta.env.VITE_PHONE_TEL || '0552739927';
