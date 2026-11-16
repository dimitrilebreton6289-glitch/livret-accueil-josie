"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { CloudRain } from "lucide-react";
import { Link } from "@/i18n/navigation";

/**
 * Météo des prochains jours au logement (service gratuit Open-Meteo, sans clé).
 * Chargée dans le navigateur du voyageur : si le service ne répond pas, la
 * carte ne s'affiche simplement pas. Si de la pluie est annoncée aujourd'hui
 * ou demain, un lien propose les idées « jour de pluie » (Autour de moi).
 */

interface Day {
  date: string;
  code: number;
  max: number;
  min: number;
  rain: number;
}

/** Code météo WMO → pictogramme. */
function icon(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code === 45 || code === 48) return "🌫️";
  if (code >= 51 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "❄️";
  if (code >= 80 && code <= 82) return "🌦️";
  if (code >= 85 && code <= 86) return "🌨️";
  if (code >= 95) return "⛈️";
  return "🌥️";
}

export default function WeatherCard({
  coords,
  autourHref,
}: {
  coords: [number, number];
  autourHref: string;
}) {
  const t = useTranslations("Weather");
  const locale = useLocale();
  const [days, setDays] = useState<Day[] | null>(null);

  useEffect(() => {
    const [lat, lon] = coords;
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
      "&timezone=Europe%2FParis&forecast_days=4";
    const ctrl = new AbortController();
    fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (!j?.daily?.time) return;
        const d = j.daily;
        setDays(
          d.time.map((date: string, i: number) => ({
            date,
            code: d.weather_code[i],
            max: Math.round(d.temperature_2m_max[i]),
            min: Math.round(d.temperature_2m_min[i]),
            rain: d.precipitation_probability_max?.[i] ?? 0,
          })),
        );
      })
      .catch(() => {});
    return () => ctrl.abort();
  }, [coords]);

  if (!days || days.length === 0) return null;

  const fmt = new Intl.DateTimeFormat(locale, { weekday: "short" });
  const rainSoon = days.slice(0, 2).some((d) => d.rain >= 60);

  return (
    <section className="rounded-card bg-cream-deep p-5">
      <h2 className="mb-3 font-display text-base font-semibold text-terracotta-dark">
        {t("title")}
      </h2>
      <div className="grid grid-cols-4 gap-2 text-center">
        {days.map((d, i) => (
          <div key={d.date} className="rounded-tile bg-surface px-1 py-2">
            <p className="text-xs font-semibold capitalize text-muted">
              {i === 0 ? t("today") : fmt.format(new Date(`${d.date}T12:00:00`))}
            </p>
            <p className="my-1 text-2xl" aria-hidden>
              {icon(d.code)}
            </p>
            <p className="text-sm font-bold text-ink">
              {d.max}°<span className="font-normal text-muted"> / {d.min}°</span>
            </p>
          </div>
        ))}
      </div>
      {rainSoon && (
        <Link
          href={autourHref}
          className="mt-3 flex items-center gap-2 rounded-tile bg-surface p-3 text-sm text-ink/85"
        >
          <CloudRain size={18} className="shrink-0 text-terracotta" />
          <span>{t("rainTip")}</span>
        </Link>
      )}
    </section>
  );
}
