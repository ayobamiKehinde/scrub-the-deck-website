import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  cookieStore.delete("dashboard_auth");
  return NextResponse.redirect(new URL("/dashboard/login", process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scrubthedeck.com"));
}
