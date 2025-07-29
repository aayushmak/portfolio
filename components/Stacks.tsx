"use client";

import React from "react";
import {  stack } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Stacks = () => {
  return (
    <section id="testimonials" className="py-20 mt-10">
      <h1 className="heading">
        Tech Stack and Tools
        <span className="text-purple"> I use</span>
      </h1>

      <div className="flex flex-col items-center ">
        <div

          className="h-[50vh] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={stack}
            direction="right"
            speed="fast"
          />
        </div>

        
      </div>
    </section>
  );
};

export default Stacks;