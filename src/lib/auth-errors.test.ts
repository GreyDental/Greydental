import { describe, expect, it } from "vitest";
import {
  friendlyAuthError,
  isEmailNotConfirmed,
  isRateLimited,
} from "@/lib/auth-errors";

describe("friendlyAuthError", () => {
  it("returns a generic message for empty input", () => {
    expect(friendlyAuthError(null)).toBe(
      "Something went wrong. Please try again.",
    );
    expect(friendlyAuthError("   ")).toBe(
      "Something went wrong. Please try again.",
    );
  });

  it("explains rate limiting", () => {
    expect(friendlyAuthError("over_email_send_rate_limit")).toContain(
      "Too many confirmation emails",
    );
  });

  it("asks the user to confirm their email", () => {
    expect(friendlyAuthError("Email not confirmed")).toContain(
      "Confirm your email",
    );
  });

  it("reports invalid credentials", () => {
    expect(friendlyAuthError("Invalid login credentials")).toBe(
      "Incorrect email or password.",
    );
  });

  it("reports an existing account", () => {
    expect(friendlyAuthError("User already registered")).toContain(
      "already exists",
    );
  });

  it("reports a short password", () => {
    expect(friendlyAuthError("Password should be at least 8 characters")).toBe(
      "Password must be at least 8 characters.",
    );
  });

  it("reports an invalid email address", () => {
    expect(friendlyAuthError("Unable to validate email address")).toContain(
      "looks invalid",
    );
  });

  it("reports a disabled OAuth provider", () => {
    expect(friendlyAuthError("provider is not enabled")).toContain(
      "Google sign-in",
    );
  });

  it("explains an unreachable authentication server", () => {
    expect(friendlyAuthError("Failed to fetch")).toContain(
      "Cannot reach the authentication server",
    );
    expect(friendlyAuthError("Network request failed")).toContain(
      "NEXT_PUBLIC_SUPABASE_URL",
    );
  });

  it("passes unknown messages through unchanged", () => {
    expect(friendlyAuthError("Unexpected auth error")).toBe(
      "Unexpected auth error",
    );
  });
});

describe("auth error predicates", () => {
  it("detects unconfirmed email errors", () => {
    expect(isEmailNotConfirmed("email_not_confirmed")).toBe(true);
    expect(isEmailNotConfirmed("Invalid login credentials")).toBe(false);
  });

  it("detects rate limit errors", () => {
    expect(isRateLimited("Email rate limit exceeded")).toBe(true);
    expect(isRateLimited("Invalid login credentials")).toBe(false);
  });

  it("handles missing messages", () => {
    expect(isEmailNotConfirmed(undefined)).toBe(false);
    expect(isRateLimited(null)).toBe(false);
  });
});
