"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = Array.from("TEXT REVEAL");

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from("span", {
        yPercent: 180,
        stagger: 0.02,
        ease: "power4.out",
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="overflow-hidden">
          <h1
            ref={containerRef}
            className="text-6xl tracking-tight font-light leading-[2.6rem] pt-0"
          >
            {chars.map((char, i) => (
              <span
                key={i}
                className="inline-block"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </main>
    </div>
  );
}
