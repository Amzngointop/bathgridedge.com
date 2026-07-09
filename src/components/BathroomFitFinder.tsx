"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

type Step = {
  question: string;
  options: { label: string; value: string }[];
};

const steps: Step[] = [
  {
    question: "What's your bathroom size?",
    options: [
      { label: "Small", value: "small" },
      { label: "Medium", value: "medium" },
      { label: "Large", value: "large" },
    ],
  },
  {
    question: "What's your biggest clutter problem?",
    options: [
      { label: "Shower products", value: "shower" },
      { label: "Counter clutter", value: "counter" },
      { label: "Under-sink chaos", value: "under-sink" },
      { label: "Floor mess", value: "floor" },
    ],
  },
  {
    question: "Do you rent or own?",
    options: [
      { label: "Renter (no-drill priority)", value: "rent" },
      { label: "Homeowner", value: "own" },
    ],
  },
];

type Result = {
  headline: string;
  description: string;
  categories: { label: string; slug: string }[];
};

function getResult(answers: string[]): Result {
  const [size, clutter, tenure] = answers;

  if (clutter === "shower") {
    return {
      headline: "Start with your shower.",
      description:
        tenure === "rent"
          ? "Adhesive and suction caddies will solve most shower clutter without touching the tile. A tension-pole tower gives you even more capacity with zero marks at move-out."
          : "Corner caddies and tension poles both work well. With ownership flexibility, you can also consider a permanent drill-mounted shelf for the most stable long-term solution.",
      categories: [
        { label: "Shower & Bathtub Organizers", slug: "shower-bathtub-organizers" },
      ],
    };
  }

  if (clutter === "counter") {
    return {
      headline: "Reclaim your countertop.",
      description:
        size === "small"
          ? "In a small bathroom, a rotating tray or a 3-tier corner shelf uses vertical space efficiently without expanding your countertop footprint."
          : "With more surface to work with, a 5-tier organizer with drawers keeps everything accessible while maintaining a clean visual line from the door.",
      categories: [
        { label: "Vanity & Countertop Organizers", slug: "vanity-countertop-organizers" },
        { label: "Toothbrush Holders", slug: "toothbrush-holders" },
      ],
    };
  }

  if (clutter === "under-sink") {
    return {
      headline: "Fix the cabinet first.",
      description:
        "Pull-out organizers transform under-sink chaos without any permanent installation. Start with clear or adjustable-height units that work around your existing plumbing.",
      categories: [
        { label: "Under-Sink & Cabinet Organizers", slug: "under-sink-cabinet-organizers" },
      ],
    };
  }

  // floor
  return {
    headline: "A better mat changes the whole room.",
    description:
      size === "small"
        ? "In a compact bathroom, a 24×16 mat keeps the floor open while still providing soft, non-slip coverage where you need it most."
        : "In a larger bathroom, a coordinated 2-piece set handles both the tub exit and the toilet area — organized and cohesive.",
    categories: [
      { label: "Bath Mats & Floor Storage", slug: "bath-mats-floor-storage" },
    ],
  };
}

export default function BathroomFitFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  function choose(value: string) {
    const next = [...answers, value];
    if (step < steps.length - 1) {
      setAnswers(next);
      setStep(step + 1);
    } else {
      setAnswers(next);
      setDone(true);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setDone(false);
  }

  const result = done ? getResult(answers) : null;

  return (
    <section id="fit-finder" className="py-16 border-t border-b border-[#E8E6E1] dark:border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <p className="eyebrow text-center mb-3">Interactive Tool</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-center text-[#14171A] dark:text-stone-100 mb-2">
            Bathroom Fit Finder
          </h2>
          <p className="text-sm text-center text-[#7A7F7A] dark:text-stone-500 mb-10">
            Three questions. One clear recommendation.
          </p>

          {/* Progress dots */}
          {!done && (
            <div className="flex justify-center gap-2 mb-8">
              {steps.map((_, i) => (
                <span
                  key={i}
                  className={`block w-2 h-2 rounded-full transition-colors ${
                    i === step
                      ? "bg-[#5B7561] dark:bg-[#8AA391]"
                      : i < step
                      ? "bg-[#5B7561]/40 dark:bg-[#8AA391]/40"
                      : "bg-[#E8E6E1] dark:bg-stone-700"
                  }`}
                />
              ))}
            </div>
          )}

          {!done ? (
            <div className="fade-up visible">
              <p className="font-serif text-xl font-medium text-[#14171A] dark:text-stone-100 text-center mb-6">
                {steps[step].question}
              </p>
              <div className="grid grid-cols-1 gap-3">
                {steps[step].options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => choose(opt.value)}
                    className="w-full text-left px-5 py-3.5 border border-[#E8E6E1] dark:border-stone-700 text-sm text-[#14171A] dark:text-stone-100 hover:border-[#5B7561] dark:hover:border-[#8AA391] hover:text-[#5B7561] dark:hover:text-[#8AA391] transition-colors rounded-none font-sans"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            result && (
              <div
                style={{ animation: "fadeSlideUp 600ms ease-out forwards" }}
                className="border border-[#E8E6E1] dark:border-stone-700 p-6"
              >
                <p className="eyebrow mb-2">Your recommendation</p>
                <h3 className="font-serif text-xl font-medium text-[#14171A] dark:text-stone-100 mb-3">
                  {result.headline}
                </h3>
                <p className="text-sm text-[#4A4F4A] dark:text-stone-400 leading-relaxed mb-5">
                  {result.description}
                </p>
                <div className="flex flex-col gap-2">
                  {result.categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/best/${c.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm text-[#5B7561] dark:text-[#8AA391] hover:text-[#3A4D40] dark:hover:text-[#A6BCA9] transition-colors"
                    >
                      Browse {c.label}
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
                <button
                  onClick={reset}
                  className="mt-6 inline-flex items-center gap-1.5 text-[12px] text-[#7A7F7A] dark:text-stone-500 hover:text-[#4A4F4A] dark:hover:text-stone-300 transition-colors"
                >
                  <RotateCcw size={12} />
                  Start over
                </button>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
