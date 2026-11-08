"use client";

import { useEffect, useRef, useState } from "react";

const animatedStatistics = [
  { target: 9, suffix: "+", label: "Years of Experience" },
  { target: 2500, suffix: "+", label: "Customers Served" },
  { target: 5000, suffix: "+", label: "Trucks Repaired" },
] as const;

const staticStatistic = { value: "24/7", label: "Breakdown Support" } as const;
const animationDuration = 1800;

export default function HomeStatistics() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [values, setValues] = useState([0, 0, 0]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        const targets = animatedStatistics.map(({ target }) => target);
        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (reducedMotion) {
          setValues(targets);
          return;
        }

        let startTime: number | undefined;

        const animate = (time: number) => {
          startTime ??= time;
          const progress = Math.min((time - startTime) / animationDuration, 1);
          const easedProgress = 1 - (1 - progress) ** 3;

          setValues(targets.map((target) => Math.floor(target * easedProgress)));

          if (progress < 1) {
            frame = window.requestAnimationFrame(animate);
          }
        };

        frame = window.requestAnimationFrame(animate);
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="New India Automotive service statistics"
      className="bg-zinc-950 px-5 py-8 text-center sm:px-8 sm:py-10"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-7 sm:grid-cols-4 sm:gap-x-6">
        {animatedStatistics.map((statistic, index) => (
          <div key={statistic.label} className="min-w-0">
            <p className="text-2xl font-black text-white sm:text-3xl">
              <span aria-label={`${statistic.target}${statistic.suffix}`}>
                {values[index]}
                {statistic.suffix}
              </span>
            </p>
            <p className="mt-2 text-[0.65rem] font-semibold uppercase leading-5 tracking-wider text-zinc-300 sm:text-xs">
              {statistic.label}
            </p>
          </div>
        ))}
        <div className="min-w-0">
          <p className="text-2xl font-black text-white sm:text-3xl">
            {staticStatistic.value}
          </p>
          <p className="mt-2 text-[0.65rem] font-semibold uppercase leading-5 tracking-wider text-zinc-300 sm:text-xs">
            {staticStatistic.label}
          </p>
        </div>
      </div>
    </section>
  );
}
