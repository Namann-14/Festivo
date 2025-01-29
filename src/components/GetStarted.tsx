"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import {ChevronRight} from 'lucide-react';
export function GetStarted() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-black-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-5xl text-2xl text-white relative z-20 font-bold")}>
      Ready to Get Started?
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 text-lg">
      Join thousands of event organizers and attendees who trust Festivo for secure, transparent event ticketing.
      </p>
        <div className="mt-8 relative z-20">
        <Link 
        href="/create-event" 
        className="gradient-button group px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
        >
        Get Started Now
        <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
        </div>
    </div>
  );
}
