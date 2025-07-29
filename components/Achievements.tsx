"use client";

import { Carousel } from "./ui/Carousel"; // adjust path as needed
import { certificates

 } from "@/data";
export default function Achievements() {
  return (
    <section className="py-16  bg-transparent text-white">
      <div className="text-center mb-20">
        <h1 className="heading">My Achievements</h1>
      </div>

      <Carousel slides={certificates} />
    </section>
  );
}