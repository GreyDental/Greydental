/** After auth, do a full navigation so middleware sees the session cookies. */
export function goToApp(path = "/student-dashboard") {
  const target = path.startsWith("/") ? path : "/student-dashboard";
  window.location.assign(target);
}

export function oauthRedirectTo(next = "/student-dashboard") {
  const url = new URL("/auth/callback", window.location.origin);
  url.searchParams.set("next", next.startsWith("/") ? next : "/student-dashboard");
  return url.toString();
}
