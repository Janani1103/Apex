import crypto from "crypto";
import { cookies } from "next/headers";

const DEFAULT_PIN = "APEXWORLD@2026";
const COOKIE_NAME = "apexworld_admin_session";

function getAdminPin(): string {
  return process.env.ADMIN_SECRET_PIN || DEFAULT_PIN;
}

function getSecretKey(): string {
  // Use a stable secret derived from the PIN or env variable
  return process.env.ADMIN_JWT_SECRET || getAdminPin() + "_secret_salt_2026";
}

/**
 * Validates the provided PIN against the configured ADMIN_SECRET_PIN.
 */
export function verifyAdminPin(pin: string): boolean {
  if (!pin) return false;
  const expectedPin = getAdminPin();
  // Constant-time comparison to prevent timing attacks
  const a = Buffer.from(pin.trim());
  const b = Buffer.from(expectedPin.trim());
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/**
 * Creates a signed session token: timestamp.signature
 */
export function createAdminSessionToken(): string {
  const timestamp = Date.now().toString();
  const hmac = crypto.createHmac("sha256", getSecretKey());
  hmac.update(timestamp);
  const signature = hmac.digest("hex");
  return `${timestamp}.${signature}`;
}

/**
 * Verifies if the session token is valid and not expired (valid for 24 hours).
 */
export function verifyAdminSessionToken(token: string | null | undefined): boolean {
  if (!token || typeof token !== "string") return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;

  const [timestampStr, signature] = parts;
  const timestamp = parseInt(timestampStr, 10);
  if (isNaN(timestamp)) return false;

  // Max session validity: 24 hours
  const maxAge = 24 * 60 * 60 * 1000;
  if (Date.now() - timestamp > maxAge || Date.now() < timestamp) {
    return false;
  }

  const hmac = crypto.createHmac("sha256", getSecretKey());
  hmac.update(timestampStr);
  const expectedSignature = hmac.digest("hex");

  const a = Buffer.from(signature);
  const b = Buffer.from(expectedSignature);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

/**
 * Checks Next.js incoming request cookies or headers for valid admin session.
 */
export function isAuthenticatedAdmin(): boolean {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    return verifyAdminSessionToken(token);
  } catch {
    return false;
  }
}

export { COOKIE_NAME };

