"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
            <button
              className={styles.trigger}
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="18" height="18">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            {/* grid-template-rows trick: 0fr → 1fr gives a smooth height transition */}
            <div className={styles.panel}>
              <p className={styles.answer}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
