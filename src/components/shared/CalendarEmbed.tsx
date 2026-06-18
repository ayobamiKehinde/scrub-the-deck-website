"use client";

import { useEffect, useRef } from "react";
import styles from "@/app/davecall/davecall.module.css";

const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

interface CalendarEmbedProps {
  src: string;
  id: string;
}

export default function CalendarEmbed({ src, id }: CalendarEmbedProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove any stale instance of the script so it re-runs fresh
    const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.src = SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const s = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
      if (s) s.remove();
    };
  }, [src]);

  return (
    <div className={styles.calendarWrap} ref={wrapRef}>
      <iframe
        src={src}
        id={id}
        scrolling="no"
        style={{ width: "100%", border: "none", outline: "none", display: "block", background: "transparent" }}
      />
    </div>
  );
}
