'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Step = {
  icon: JSX.Element;
  title: string;
  desc: string;
  image: string;
};

export default function HowItWorksSection({ steps }: { steps: Step[] }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hovering, steps.length]);

  const goToPrevious = () =>
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  const goToNext = () =>
    setCurrentStep((prev) => (prev + 1) % steps.length);

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  return (
    <section
      id="how-it-works"
      className="relative py-16 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-bold mb-4">How Bogo Ninja Works</h2>
          <p className="text-gray-600 text-lg">Get started in just 4 simple steps</p>
        </div>

        {/* Desktop View (Cards + Arrows) */}
        <div className="hidden lg:flex flex-col lg:flex-row justify-evenly items-center gap-12">
          {/* Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-300 p-4 rounded-lg border ${index === currentStep
                    ? "bg-bogo-orange-50 border-bogo-orange-500 shadow-md"
                    : "border-transparent"
                  }`}
                onClick={() => setCurrentStep(index)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-16 h-16 bg-bogo-orange-lightTransparent rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Step Image + Arrows */}
          <div
            className="relative flex justify-center items-center max-w-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={goToPrevious}
              className="absolute -left-12 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <Image
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              width={320}
              height={340}
              className="transition-opacity duration-500 mx-8"
            />

            <button
              onClick={goToNext}
              className="absolute -right-12 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile View (Only Title + Image) */}
        <div className="block lg:hidden mt-10 text-center">
          <h3 className="text-xl font-semibold ">{steps[currentStep].title}</h3>
          <p className="text-gray-600 mb-4">{steps[currentStep].desc}</p>
          <div className="relative w-full flex justify-center">
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <Image
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              width={280}
              height={280}
              className="rounded-md"
            />

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
