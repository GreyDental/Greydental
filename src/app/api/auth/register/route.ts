import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

type Body = {
  email?: string;
  password?: string;
  full_name?: string;
  role?: string;
  institution?: string;
  specialty?: string;
  license_number?: string;
};

/**
 * Creates a confirmed user when SUPABASE_SERVICE_ROLE_KEY is set so signup
 * can sign in immediately (no “confirm email then log in” loop).
 */
export async function POST(request: Request) {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;

  if (!url || !serviceKey || serviceKey.includes("REPLACE")) {
    return NextResponse.json({ mode: "client" as const });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password || "";
  const role =
    body.role === "instructor" || body.role === "admin" ? body.role : "student";

  if (!email || password.length < 8) {
    return NextResponse.json(
      { error: "Valid email and password (8+ chars) required." },
      { status: 400 },
    );
  }

  const admin = createClient(url, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: {
      full_name: body.full_name?.trim() || "",
      role,
      institution: body.institution?.trim() || "",
      specialty: body.specialty?.trim() || "",
      license_number: body.license_number?.trim() || "",
    },
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("already") || msg.includes("registered")) {
      return NextResponse.json(
        { error: "An account with this email already exists. Try logging in instead." },
        { status: 409 },
      );
    }
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  if (data.user) {
    await admin.from("profiles").upsert({
      id: data.user.id,
      full_name: body.full_name?.trim() || "",
      role,
      institution: body.institution?.trim() || null,
      specialty: body.specialty?.trim() || null,
      license_number: body.license_number?.trim() || null,
    });
  }

  return NextResponse.json({ mode: "provisioned" as const, ok: true });
}
