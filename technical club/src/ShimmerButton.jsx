"use client";
import React from "react";
import { Toaster } from "sonner";

export function TailwindcssButtons() {
  return (
    <div className="flex w-1/5 items-center">
      <Toaster position="top-center" />
      <div className="flex justify-start w-full max-w-7xl mx-auto">
        {/* Original */}
        <button
          className="inline-flex z-10 animate-shimmer h-14 items-center justify-center rounded-[25px] bg-[linear-gradient(110deg,#0c0212,45%,#5c1c64,55%,#0c0212)] bg-[length:200%_100%] px-6 font-medium 
  text-slate-400 transition-colors transition-transform duration-300 transform before:content-[''] hover:scale-110"
        >
          <span className="transition-transform duration-300 transform">
            Hack Genesis
          </span>
        </button>


        {/* Border Magic Try */}
        {/* <button
          className="inline-flex z-10 animate-shimmer h-14 items-center justify-center rounded-[25px] bg-[linear-gradient(110deg,#0c0212,45%,#5c1c64,55%,#0c0212)] bg-[length:200%_100%] px-6 font-medium 
  text-slate-400 transition-colors transition-transform duration-300 transform before:content-[''] before:absolute before:z-1 before:w-[102%] before:h-[102%] before:bg-[linear-gradient(var(--rotate),red,blue)] before:rounded-[25px] before:animate-borMagic before:z-1 hover:scale-110"
        >
          <span className="transition-transform duration-300 transform">
            Hack Genesis
          </span>
        </button>  */}


        {/* Border Magic From Tailwind */}
        {/* <button className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Hack Genesis
          </span>
        </button> */}


        {/* Hover pe animation */}
        {/* <button
          className="inline-flex h-14 items-center justify-center rounded-[25px] bg-[transparent] bg-[length:200%_100%] px-6 font-medium 
  text-slate-400 transition-colors transition-transform duration-300 transform 
  focus:outline-none focus:ring-2 focus:ring-slate-400 
  focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-110 hover:animate-shimmer hover:bg-[linear-gradient(110deg,#0c0212,45%,#5c1c64,55%,#0c0212)] hover:transition-scale"
        >
          <span className="transition-transform duration-300 transform">
            Hack Genesis
          </span>
        </button> */}
      </div>
    </div>
  );
}
