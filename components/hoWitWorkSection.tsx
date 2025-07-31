'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import { Download, MapPin, Smartphone, Utensils } from "lucide-react";

const steps = [
  {
    icon: <Download className="w-8 h-8 text-bogo-orange-600" />,
    title: "Download & Sign Up",
    desc: "Create your account in seconds and start exploring",
    image: "/step1.png",
  },
  {
    icon: <MapPin className="w-8 h-8 text-bogo-orange-600" />,
    title: "Find Nearby Deals",
    desc: "Explore restaurants near you with live offers",
    image: "/step2.png",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-bogo-orange-600" />,
    title: "Grab a Coupon",
    desc: "Tap, save, and show at restaurant",
    image: "/step3.png",
  },
  {
    icon: <Utensils className="w-8 h-8 text-bogo-orange-600" />,
    title: "Redeem & Dine",
    desc: "Enjoy discounts on your favorite meals",
    image: "/step4.png",
  },
];

export default function HowItWorksSection() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-play steps every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7">
          <h2 className="text-4xl font-bold mb-4">How Bogo Ninja Works</h2>
          <p className="text-gray-600 text-lg">Get started in just 4 simple steps</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-12">
          
          {/* Left: Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-300 p-4 rounded-lg border ${
                  index === currentStep
                    ? "bg-bogo-orange-50 border-bogo-orange-500 shadow-md"
                    : "border-transparent"
                }`}
                onClick={() => handleStepClick(index)}
              >
                <div className="w-16 h-16 bg-bogo-orange-lightTransparent rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex justify-center items-center max-w-md">
            <Image
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              width={280}
              height={320}
              className="transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
