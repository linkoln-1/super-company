import React, { FC } from "react";
import { GradientButton } from "@/components/GradientButton/GradientButton";

export const SuperCompanyBlock: FC = () => {
  return (
    <div className="p-4 md:p-10 bg-gray-100 rounded-lg shadow-md">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="max-w-xl md:max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            SUPERCOMPANY: ADVANCE TECHNOLOGY EQUIPMENT
          </h1>
          <p className="text-gray-700 mb-6">
            With a rich history spanning more than 15 years, we have established
            ourselves as a prominent player in the heart of the industrial and
            digital printing market. At the core of our company's philosophy
            lies our unwavering commitment to tailor-made solutions for every
            client and project, a principle that underpins and cultivates
            enduring, mutually advantageous partnerships with leading
            international manufacturers.
          </p>
          <GradientButton
            classNameButton="bg-gray-100 p-1 relative z-0 before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-400 before:to-blue-500 before:origin-border before:z-[-1] before:rounded-xl before:content-['']"
            alignment="left"
            classNameSpan="block bg-gray-100 px-3 md:px-4 py-1.5 md:py-2 rounded-lg"
            width="150px md:180px"
          >
            Learn More
          </GradientButton>
        </div>
      </div>
    </div>
  );
};
