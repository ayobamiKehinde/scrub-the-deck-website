"use client";

import { usePathname } from "next/navigation";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import VideoPageBg from "@/components/shared/VideoPageBg";

export default function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname?.startsWith("/dashboard");

  return (
    <>
      {!bare && <VideoPageBg />}
      {!bare && <Nav />}
      {children}
      {!bare && <Footer />}
    </>
  );
}
