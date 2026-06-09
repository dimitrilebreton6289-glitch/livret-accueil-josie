"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { useTranslations } from "next-intl";

/** Bouton « Copier » avec retour visuel (« Copié ! »). */
export default function CopyButton({
  value,
  label,
}: {
  value: string;
  label?: string;
}) {
  const t = useTranslations("Common");
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Le presse-papiers peut être bloqué (http non sécurisé) : on ignore.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-terracotta px-5 text-sm font-bold text-white transition-soft active:scale-95"
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
      {copied ? t("copied") : (label ?? t("copy"))}
    </button>
  );
}
