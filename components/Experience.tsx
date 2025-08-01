import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-20 mt-10">
      <h1 className="heading text-purple">
        Experience <span className="text-white">and</span> Involvements
      </h1>

      <div className="w-full mt-12 grid justify-self-center lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
            <Button
                key={card.id}
                borderRadius="1.75rem"
                duration={Math.floor(Math.random()*10000) + 10000}
                className="flex-1 text-white border-neutral-200 dark:border-s-slate-800"
            >
                <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img src={card.thumbnail} alt={card.thumbnail} 
                    className="lg:w-32 md:w-20 w-16"/>
                    <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                            {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
