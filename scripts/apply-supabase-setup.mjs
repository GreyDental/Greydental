/**
 * Apply remaining Supabase setup once secrets are in .env.local:
 *   SUPABASE_SERVICE_ROLE_KEY=...   (Settings → API → service_role)
 *   SUPABASE_DB_PASSWORD=...        (Settings → Database → Database password)
 *
 * Does: run remaining SQL (MCQ + seed), confirm auth users, create admin + student E2E users.
 * Auth "Confirm email" OFF still requires Dashboard or SUPABASE_ACCESS_TOKEN (Management API).
 */
import { createClient } from "@supabase/supabase-js";
import { existsSync, readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

function loadEnvLocal() {
  const path = resolve(root, ".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const i = trimmed.indexOf("=");
    if (i === -1) continue;
    const key = trimmed.slice(0, i).trim();
    const value = trimmed.slice(i + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnvLocal();

const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").replace(/\/$/, "");
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const dbPassword = process.env.SUPABASE_DB_PASSWORD || "";
const accessToken = process.env.SUPABASE_ACCESS_TOKEN || "";
const ref = url.match(/^https:\/\/([a-z0-9-]+)\.supabase\.co$/i)?.[1];

if (!url || !ref) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL");
  process.exit(1);
}
if (!serviceKey || serviceKey.includes("REPLACE")) {
  console.error(
    "Add SUPABASE_SERVICE_ROLE_KEY to .env.local (Supabase → Settings → API → service_role).",
  );
  process.exit(1);
}

const admin = createClient(url, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function disableConfirmEmail() {
  if (!accessToken) {
    console.warn(
      "⚠ Skip Auth config (no SUPABASE_ACCESS_TOKEN). Turn OFF Confirm email in Dashboard → Auth → Providers → Email.",
    );
    return;
  }
  const res = await fetch(
    `https://api.supabase.com/v1/projects/${ref}/config/auth`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mailer_autoconfirm: true,
        site_url: "https://grey-coral.vercel.app",
        uri_allow_list:
          "https://grey-coral.vercel.app/**,https://grey-coral.vercel.app/auth/callback,http://localhost:3000/**,http://localhost:3000/auth/callback",
      }),
    },
  );
  if (!res.ok) {
    console.warn("⚠ Auth config patch failed:", res.status, await res.text());
    return;
  }
  console.log("✓ Auth: autoconfirm on + site/redirect URLs set");
}

async function runSqlFiles() {
  if (!dbPassword) {
    console.warn(
      "⚠ Skip SQL (no SUPABASE_DB_PASSWORD). Run supabase/schema_assessments_mcq.sql + seed_content.sql in SQL Editor.",
    );
    return;
  }

  const { Client } = pg;
  const host = `db.${ref}.supabase.co`;
  const client = new Client({
    host,
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: dbPassword,
    ssl: { rejectUnauthorized: false },
  });

  await client.connect();
  const files = [
    "supabase/seed_content.sql",
    "supabase/schema_assessments_mcq.sql",
  ];
  for (const rel of files) {
    const sql = readFileSync(resolve(root, rel), "utf8");
    process.stdout.write(`Running ${rel}… `);
    await client.query(sql);
    console.log("ok");
  }
  await client.end();
  console.log("✓ SQL applied");
}

async function ensureUser(email, password, role) {
  const { data: listed } = await admin.auth.admin.listUsers({ perPage: 200 });
  const existing = listed?.users?.find(
    (u) => u.email?.toLowerCase() === email.toLowerCase(),
  );

  let userId = existing?.id;
  if (!userId) {
    const { data, error } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { full_name: `Grey ${role}`, role },
    });
    if (error) throw new Error(`createUser ${email}: ${error.message}`);
    userId = data.user.id;
    console.log(`✓ Created ${role} ${email}`);
  } else {
    await admin.auth.admin.updateUserById(userId, {
      password,
      email_confirm: true,
      user_metadata: { full_name: `Grey ${role}`, role },
    });
    console.log(`✓ Updated ${role} ${email}`);
  }

  const { error: profileError } = await admin.from("profiles").upsert({
    id: userId,
    full_name: `Grey ${role}`,
    role,
  });
  if (profileError) throw new Error(`profile ${email}: ${profileError.message}`);
}

async function main() {
  console.log("\nGrey Dental Supabase setup\n");
  await disableConfirmEmail();
  await runSqlFiles();

  const studentEmail = process.env.E2E_STUDENT_EMAIL || "student@greydental.app";
  const studentPass = process.env.E2E_STUDENT_PASSWORD || "GreyStudent123!";
  const adminEmail = process.env.E2E_ADMIN_EMAIL || "admin@greydental.app";
  const adminPass = process.env.E2E_ADMIN_PASSWORD || "GreyAdmin123!";

  await ensureUser(studentEmail, studentPass, "student");
  await ensureUser(adminEmail, adminPass, "admin");

  console.log("\nAdd these to .env.local for E2E / login testing:\n");
  console.log(`E2E_STUDENT_EMAIL=${studentEmail}`);
  console.log(`E2E_STUDENT_PASSWORD=${studentPass}`);
  console.log(`E2E_ADMIN_EMAIL=${adminEmail}`);
  console.log(`E2E_ADMIN_PASSWORD=${adminPass}`);
  console.log("\nDone.\n");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
