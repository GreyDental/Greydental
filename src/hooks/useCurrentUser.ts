"use client";

import { useEffect, useState } from "react";
import type { Profile } from "@/lib/supabase/types";

export type CurrentUser = {
  profile: Profile | null;
  email: string | null;
  displayName: string;
  firstName: string;
  roleLabel: string;
  loading: boolean;
};

function firstNameFrom(fullName: string | null | undefined, email: string | null) {
  const name = (fullName || "").trim();
  if (name) return name.split(/\s+/)[0] || name;
  if (email) return email.split("@")[0] || "there";
  return "there";
}

function displayNameFrom(fullName: string | null | undefined, email: string | null) {
  const name = (fullName || "").trim();
  if (name) return name;
  if (email) return email.split("@")[0] || "Member";
  return "Member";
}

function roleLabel(role: string | null | undefined) {
  if (role === "admin") return "Administrator";
  if (role === "instructor") return "Instructor";
  return "Student";
}

let cache: { profile: Profile | null; email: string | null } | null = null;
let inflight: Promise<{ profile: Profile | null; email: string | null }> | null =
  null;

async function fetchCurrentUser() {
  if (cache) return cache;
  if (!inflight) {
    inflight = fetch("/api/profile")
      .then(async (res) => {
        if (!res.ok) return { profile: null, email: null };
        const json = (await res.json()) as {
          profile?: Profile | null;
          email?: string | null;
        };
        return {
          profile: json.profile ?? null,
          email: json.email ?? null,
        };
      })
      .catch(() => ({ profile: null, email: null }))
      .finally(() => {
        inflight = null;
      });
  }
  cache = await inflight;
  return cache;
}

/** Call after profile updates so shells pick up new name. */
export function invalidateCurrentUserCache() {
  cache = null;
}

export function useCurrentUser(): CurrentUser {
  const [profile, setProfile] = useState<Profile | null>(cache?.profile ?? null);
  const [email, setEmail] = useState<string | null>(cache?.email ?? null);
  const [loading, setLoading] = useState(!cache);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchCurrentUser().then((data) => {
      if (cancelled) return;
      setProfile(data.profile);
      setEmail(data.email);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return {
    profile,
    email,
    displayName: displayNameFrom(profile?.full_name, email),
    firstName: firstNameFrom(profile?.full_name, email),
    roleLabel: roleLabel(profile?.role),
    loading,
  };
}
