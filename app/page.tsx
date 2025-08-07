"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Star,
  MapPin,
  Users,
  Gift,
  Utensils,
  Download,
  Smartphone,
  Clock,
  DollarSign,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Shield,
  Megaphone,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useEffect, useRef} from "react";
import Counter from "../components/counter";
import HowItWorksSection from "../components/howItWorksSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    name: "Alex",
    initial: "A",
    text: "I've saved hundreds eating out — Bogo Ninja makes it guilt-free to dine out often!",
    rating: 5,
  },
  {
    name: "John",
    initial: "J",
    text: "Simple, easy, and free. I always check Bogo Ninja before eating out.",
    rating: 5,
  },
  {
    name: "Steve",
    initial: "S",
    text: "Great offers from restaurants I already visit. No gimmicks, just real savings.",
    rating: 4,
  },
  {
    name: "Emma",
    initial: "E",
    text: "Fantastic experience! Deals are always legit and easy to redeem.",
    rating: 5,
  },
  {
    name: "Liam",
    initial: "L",
    text: "Saved a lot while discovering new places in my city. Love it!",
    rating: 4,
  },
];


export default function BogoNinjaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
   const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    if (container && container.scrollWidth > container.clientWidth) {
      setShowArrows(true);
    }
  }, []);

  const scrollByAmount = 260;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  

  const steps = [
    {
      icon: <Download className="w-8 h-8 text-bogo-orange-600" />,
      title: "Download & Sign Up",
      desc: "Create your account in seconds and start exploring",
      image: "/step01.svg",
    },
    {
      icon: <MapPin className="w-8 h-8 text-bogo-orange-600" />,
      title: "Find Nearby Deals",
      desc: "Explore restaurants near you with live offers",
      image: "/step02.svg",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-bogo-orange-600" />,
      title: "Grab a Coupon",
      desc: "Tap, save, and show at restaurant",
      image: "/step03.svg",
    },
    {
      icon: <Utensils className="w-8 h-8 text-bogo-orange-600" />,
      title: "Redeem & Dine",
      desc: "Enjoy discounts on your favorite meals",
      image: "/step04.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-bogo-orange-50 to-bogo-dark-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-bogo-orange-100 z-50">
        <div className="container mx-auto px-2 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {/* <div className="w-10 h-10 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div> */}
              <div className="relative w-[44px] h-[56px] sm:w-[50px] sm:h-[60px]">
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold bg-bogo-gradient-3 bg-clip-text text-transparent">
                Bogo Ninja
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("deals")}
                className="text-gray-700 hover:text-bogo-orange-600 transition-colors"
              >
                Top Deals
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-bogo-orange-600 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("partners")}
                className="text-gray-700 hover:text-bogo-orange-600 transition-colors"
              >
                For Restaurants
              </button>
              <Button
                onClick={() => scrollToSection("download")}
                className="bg-bogo-gradient-4 hover:to-bogo-dark-600"
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-bogo-orange-100">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection("deals")}
                  className="text-left text-gray-700 hover:text-bogo-orange-600"
                >
                  Top Deals
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-left text-gray-700 hover:text-bogo-orange-600"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="text-left text-gray-700 hover:text-bogo-orange-600"
                >
                  For Restaurants
                </button>
                <Button
                  onClick={() => scrollToSection("download")}
                  className="bg-bogo-gradient-3 w-full"
                >
                  Download App
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
    <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Grab Exciting{" "}
                  <span className="bg-bogo-gradient-3 bg-clip-text text-transparent">
                    Local Deals
                  </span>
                  . Eat More, Pay Less.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover coupons and exclusive discounts from restaurants near you — 100% free, forever!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-bogo-gradient-3 hover:from-bogo-orange-600 hover:to-bogo-dark-600 text-lg px-8 py-6"
                  onClick={() => scrollToSection("deals")}
                >
                  Browse Top Deals
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-bogo-dark-600 text-bogo-dark-600 hover:bg-bogo-orange-50 text-lg px-8 py-6 bg-transparent"
                  onClick={() => scrollToSection("partners")}
                >
                  I'm a Restaurant
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="relative px-4 py-2 text-sm text-green-800 rounded-full shadow-md bg-gradient-to-tr from-green-100 via-white to-green-200 border border-green-300">
                  <CheckCircle className="w-4 h-4 mr-2 inline" />
                  100% Free for Customers
                </div>

                <div className="relative px-4 py-2 text-sm text-bogo-orange-800 rounded-full shadow-md bg-gradient-to-tr from-orange-100 via-white to-orange-200 border border-orange-300">
                  <CheckCircle className="w-4 h-4 mr-2 inline" />
                  No Hidden Charges
                </div>

                <div className="relative px-4 py-2 text-sm text-blue-800 rounded-full shadow-md bg-gradient-to-tr from-blue-100 via-white to-blue-200 border border-blue-300">
                  <CheckCircle className="w-4 h-4 mr-2 inline" />
                  Redeem Instantly
                </div>
              </div>

            </div>

            {/* Right Image Section */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-10">
                <Image
                  src="/hero_mobile_mokeup.svg"
                  alt="Happy diners using Bogo Ninja app"
                  width={681}
                  height={677}
                  className="mt-5"
                />
              </div>
              <div className="absolute -top-4 -right-2 w-32 h-32 bg-bogo-gradient-6 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-9 w-24 h-24 bg-bogo-gradient-6 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Restaurant Partners */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Restaurants You Know & Love
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Trusted by top dining destinations
            </p>
          </div>

          {/* Auto-scrolling carousel (mobile) */}
          <div className="block lg:hidden relative">
            <div className="flex w-max animate-marquee gap-6">
              {[...Array(2)].flatMap(() => [1, 2, 3, 4, 5, 6]).map((i, idx) => (
                <div
                  key={idx}
                  className="min-w-[150px] flex-shrink-0 flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors h-[150px]"
                >
                  <div className="h-[100px] w-full flex items-center justify-center">
                    <Image
                      src={`/logotype2_0${i}.png`}
                      alt={`Restaurant Partner ${i}`}
                      width={140}
                      height={0}
                      className="object-contain h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Static grid (desktop) */}
          <div className="hidden lg:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors h-[150px]"
              >
                <div className="h-[100px] w-full flex items-center justify-center">
                  <Image
                    src={`/logotype2_0${i}.png`}
                    alt={`Restaurant Partner ${i}`}
                    width={140}
                    height={0}
                    className="object-contain h-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => scrollToSection("partners")}>
              Want your restaurant featured here? Partner With Us
            </Button>
          </div>
        </div>
      </section>



      {/* Social Proof Stats */}
      {/* <section className="py-16 bg-bogo-gradient-7 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Join Fastest Growing Dining Deal Network
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Utensils className="w-12 h-12" />
              </div>
              <div className="text-5xl font-extrabold mb-2">
                <Counter target={500} />+
              </div>
              <div className="text-lg opacity-90">Restaurants Partnered</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-5xl font-extrabold mb-2">
                <Counter target={50000} />+
              </div>
              <div className="text-lg opacity-90">Happy Diners</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12" />
              </div>
              <div className="text-5xl font-extrabold mb-2">
                <Counter target={20} />+
              </div>
              <div className="text-lg opacity-90">Cities Covered</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Gift className="w-12 h-12" />
              </div>
              <div className="text-5xl font-extrabold mb-2">
                <Counter target={10000} />+
              </div>
              <div className="text-lg opacity-90">Deals Redeemed</div>
            </div>
          </div>

        </div>
      </section> */}

      {/* How It Works */}
      <HowItWorksSection steps={steps} />

      {/* <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Bogo Ninja Works</h2>
            <p className="text-gray-600 text-lg">Get started in just 4 simple steps</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-evenly items-center gap-12">
            {/* Left: Steps */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-xl">
              {[
                {
                  icon: <Download className="w-8 h-8 text-bogo-orange-600" />,
                  title: "Download & Sign Up",
                  desc: "Create your account in seconds and start exploring",
                },
                {
                  icon: <MapPin className="w-8 h-8 text-bogo-orange-600" />,
                  title: "Find Nearby Deals",
                  desc: "Explore restaurants near you with live offers",
                },
                {
                  icon: <Smartphone className="w-8 h-8 text-bogo-orange-600" />,
                  title: "Grab a Coupon",
                  desc: "Tap, save, and show at restaurant",
                },
                {
                  icon: <Utensils className="w-8 h-8 text-bogo-orange-600" />,
                  title: "Redeem & Dine",
                  desc: "Enjoy discounts on your favorite meals",
                },
              ].map((step, index) => (
                <div className="text-center" key={index}>
                  <div className="w-16 h-16 bg-bogo-orange-lightTransparent rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div> */}

      {/* Right: Image */}
      {/* <div className="flex justify-center items-center max-w-md">
              <Image
                src="/mobile_mokeup04.png"
                alt="Using Bogo Ninja app"
                width={400}
                height={400}
              // className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section> */}


      {/* <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Bogo Ninja Works</h2>
            <p className="text-gray-600 text-lg">Get started in just 4 simple steps</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: <Download className="w-8 h-8 text-bogo-orange-600" />,
                title: "Download & Sign Up",
                desc: "Create your account in seconds and start exploring",
              },
              {
                icon: <MapPin className="w-8 h-8 text-bogo-orange-600" />,
                title: "Find Nearby Deals",
                desc: "Explore restaurants near you with live offers",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-bogo-orange-600" />,
                title: "Grab a Coupon",
                desc: "Tap, save, and show at restaurant",
              },
              {
                icon: <Utensils className="w-8 h-8 text-bogo-orange-600" />,
                title: "Redeem & Dine",
                desc: "Enjoy discounts on your favorite meals",
              },
            ].map((step, index) => (
              <div key={index}>
                <div className="w-16 h-16 bg-bogo-orange-lightTransparent rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}




      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Smartest Dining Companion</h2>
            <p className="text-gray-600 text-lg">Everything you need for the perfect dining experience</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="p-6 hover:shadow-lg hover:bg-bogo-orange-50 transition-shadow ">
              <CardContent className="p-0">
                <DollarSign className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Save Money Every Meal</h3>
                <p className="text-gray-600">Big savings with zero cost to you</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg hover:bg-bogo-orange-50 transition-shadow">
              <CardContent className="p-0">
                <Smartphone className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seamless App Experience</h3>
                <p className="text-gray-600">Just tap, grab, and dine</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg hover:bg-bogo-orange-50 transition-shadow">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Offers</h3>
                <p className="text-gray-600">Personalized deals near your current location</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg hover:bg-bogo-orange-50 transition-shadow">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Redemption</h3>
                <p className="text-gray-600">No waiting, no confusion</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg  hover:bg-bogo-orange-50 transition-shadow">
              <CardContent className="p-0">
                <CheckCircle className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Forever</h3>
                <p className="text-gray-600">No fees, no subscriptions</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg  hover:bg-bogo-orange-50 transition-shadow">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                <p className="text-gray-600">Your data and transactions are always safe</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Deals */}
      <section id="deals" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trending Deals Near You</h2>
            <p className="text-gray-600 text-lg">Don't miss out on these amazing offers</p>
          </div>

          {/* === MOBILE CAROUSEL (ONLY ON SMALL SCREENS) === */}
          <div className="relative md:hidden">
            {/* Left arrow */}
            <button
              onClick={() =>
                document.getElementById("deal-scroll")?.scrollBy({ left: -250, behavior: "smooth" })
              }
              className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            {/* Scrollable container */}
            <div
              id="deal-scroll"
              className="flex overflow-x-auto space-x-4 scrollbar-hide snap-x snap-mandatory px-1"
            >
              {[
                {
                  restaurant: "Pizza Palace",
                  deal: "Buy 1 Get 1 Free",
                  location: "Los Angeles",
                  discount: "50% OFF",
                  logo: "/pizza.jpg",
                },
                {
                  restaurant: "Burger Junction",
                  deal: "20% Off on All Combos",
                  location: "San Diego",
                  discount: "20% OFF",
                  logo: "/burger.png",
                },
                {
                  restaurant: "Spice Garden",
                  deal: "Free Dessert with Main Course",
                  location: "San Francisco",
                  discount: "FREE DESSERT",
                  logo: "/pizza.jpg",
                },
                {
                  restaurant: "Coffee Corner",
                  deal: "Buy 2 Get 1 Free Coffee",
                  location: "Sacramento",
                  discount: "33% OFF",
                  logo: "/coffe.jpeg",
                },
                {
                  restaurant: "Taco Fiesta",
                  deal: "30% Off on Weekdays",
                  location: "Fresno",
                  discount: "30% OFF",
                  logo: "/pizza.jpg",
                },
                {
                  restaurant: "Sushi Express",
                  deal: "15% Off + Free Delivery",
                  location: "Oakland",
                  discount: "15% OFF",
                  logo: "/coffe.jpeg",
                },
              ].map((deal, index) => (
                <div
                  key={index}
                  className="w-[85%] snap-start shrink-0"
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={deal.logo}
                        alt={deal.restaurant}
                        width={400}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                        {deal.discount}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{deal.restaurant}</h3>
                      <p className="text-gray-600 mb-2">{deal.deal}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 mr-1" />
                        {deal.location}
                      </div>
                      <Button className="w-full mx-auto border-2 border-bogo-orange-500 text-bogo-orange-600 bg-transparent hover:from-bogo-orange-600 hover:to-bogo-dark-600 hover:bg-bogo-gradient-3-r hover:text-white transition-colors">
                        Grab Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() =>
                document.getElementById("deal-scroll")?.scrollBy({ left: 250, behavior: "smooth" })
              }
              className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* === DESKTOP GRID (ONLY ON md AND ABOVE) === */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                restaurant: "Pizza Palace",
                deal: "Buy 1 Get 1 Free",
                location: "Los Angeles",
                discount: "50% OFF",
                logo: "/pizza.jpg",
              },
              {
                restaurant: "Burger Junction",
                deal: "20% Off on All Combos",
                location: "San Diego",
                discount: "20% OFF",
                logo: "/burger.png",
              },
              {
                restaurant: "Spice Garden",
                deal: "Free Dessert with Main Course",
                location: "San Francisco",
                discount: "FREE DESSERT",
                logo: "/pizza.jpg",
              },
              {
                restaurant: "Coffee Corner",
                deal: "Buy 2 Get 1 Free Coffee",
                location: "Sacramento",
                discount: "33% OFF",
                logo: "/coffe.jpeg",
              },
              {
                restaurant: "Taco Fiesta",
                deal: "30% Off on Weekdays",
                location: "Fresno",
                discount: "30% OFF",
                logo: "/pizza.jpg",
              },
              {
                restaurant: "Sushi Express",
                deal: "15% Off + Free Delivery",
                location: "Oakland",
                discount: "15% OFF",
                logo: "/coffe.jpeg",
              },
            ].map((deal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={deal.logo}
                    alt={deal.restaurant}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-red-500 text-white">{deal.discount}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{deal.restaurant}</h3>
                  <p className="text-gray-600 mb-2">{deal.deal}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {deal.location}
                  </div>
                  <Button className="w-full mx-auto border-2 border-bogo-orange-500 text-bogo-orange-600 bg-transparent hover:from-bogo-orange-600 hover:to-bogo-dark-600 hover:bg-bogo-gradient-3-r hover:text-white transition-colors">
                    Grab Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
     <section className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Diners Love Bogo Ninja</h2>
          <p className="text-gray-600 text-lg">Real stories from our happy customers</p>
        </div>

        <div className="relative">
          {/* === Left Arrow === */}
          {showArrows && (
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-white border shadow p-3 rounded-full hover:bg-gray-100"
            >
              &#8592;
            </button>
          )}

          {/* === Scrollable Cards === */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth gap-4 px-1 snap-x snap-mandatory scrollbar-hide"
          >
            {feedbacks.map((f, index) => (
              <Card
                key={index}
                className="min-w-[240px] max-w-[300px] snap-start shrink-0 p-4 hover:shadow-md"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-bogo-gradient-3 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {f.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{f.name}</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 fill-current ${
                              i < f.rating ? "" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 italic text-sm line-clamp-5">"{f.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* === Right Arrow === */}
          {showArrows && (
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 z-10 bg-white border shadow p-3 rounded-full hover:bg-gray-100"
            >
              &#8594;
            </button>
          )}
        </div>
      </div>
    </section>

      {/* Restaurant Partner Section */}
     <section id="partners" className="relative py-16 bg-bogo-dark-500 text-white overflow-hidden">
        {/* Floating Images */}
        <Image
          src="/food01.png"
          alt="Floating plate"
          width={280}
          height={280}
          className="absolute top-10 left-4 opacity-10 rotate-12 pointer-events-none"
        />
        <Image
          src="/food02.png"
          alt="Floating chef hat"
          width={150}
          height={150}
          className="absolute bottom-2 right-8 opacity-10 pointer-events-none"
        />
        <Image
          src="/food04.png"
          alt="Floating burger"
          width={300}
          height={300}
          className="absolute top-4/5 right-0 transform -translate-y-1/2 opacity-10 pointer-events-none"
        />
        {/* <Image
          src="/sheffhat.png"
          alt="Floating burger"
          width={200}
          height={200}
          className="absolute top-8 right-4 opacity-10 rotate-12 pointer-events-none"
        /> */}
        {/* Main Content */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Are You a Restaurant? Let's Grow Together.</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get discovered by thousands of nearby diners — without spending a money. Bogo Ninja helps you increase
              footfall, promote offers in real time, and grow your brand presence — all while keeping things simple and
              free.
            </p>
          </div>

          {/* Launch Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">🔥 Launch Offer: Early Bird Benefits</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Gift className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Zero Redemption Charges</h4>
                <p className="opacity-90">You keep 100% of the revenue</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Lifetime Free Subscription</h4>
                <p className="opacity-90">No monthly or annual platform fees</p>
              </div>
              <div className="text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Limited-Time Onboarding Perks</h4>
                <p className="opacity-90">Get priority visibility on the app</p>
              </div>
            </div>
          </div>

          {/* Why Partner */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">📈 Why Partner With Bogo Ninja?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Post & Manage Deals Easily</h4>
                <p className="opacity-90 text-sm">Intuitive partner dashboard to create and control your own offers</p>
              </div>
              <div className="text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Live Analytics & Insights</h4>
                <p className="opacity-90 text-sm">
                  Track redemptions, customer reach, and deal performance in real time
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Fast & Secure KYC Process</h4>
                <p className="opacity-90 text-sm">Onboard in minutes with simple documentation</p>
              </div>
              <div className="text-center">
                <Megaphone className="w-12 h-12 mx-auto mb-4" />
                <h4 className="font-semibold mb-2">Free Exposure to Nearby Diners</h4>
                <p className="opacity-90 text-sm">Tap into our fast-growing network of active food lovers</p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button size="lg" className="bg-white text-bogo-dark-600 hover:bg-gray-100 text-lg px-8 py-6">
              Become a Partner – Start for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Join Us CTA */}
      <section id="download" className="relative py-0 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 mt-12 md:mt-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left text content */}
            <div className="text-center lg:text-left">
              <h3 className="text-4xl text-gray-900 font-bold mb-4">Start Saving Instantly</h3>
              <p className="text-gray-900 mb-6 text-lg">
                Download the Bogo Ninja app and start discovering amazing deals near you.
              </p>

              {/* Download Buttons */}
              <div className="flex justify-center lg:justify-start gap-4 mt-4">
                {/* App Store Button */}
                <div className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2">
                  <div className="w-25 h-30 rounded">
                    <Image
                      src="/app_store_logo.png"
                      alt="App Store"
                      width={32}
                      height={30}
                    />
                  </div>
                  <div className="text-left text-white leading-tight">
                    <div className="text-[10px]">Download on the</div>
                    <div className="text-xs font-semibold">App Store</div>
                  </div>
                </div>

                {/* Google Play Button */}
                <div className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2">
                  <div className="w-8 h-8 rounded">
                    <Image
                      src="/play_store_logo.png"
                      alt="Google Play"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="text-left text-white leading-tight">
                    <div className="text-[10px]">Download on the</div>
                    <div className="text-xs font-semibold">Google Play</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right QR/phone image */}
            <div className="relative flex justify-center lg:justify-end">
              <Image
                src="/mobile_mokeup04.png"
                alt="Using Bogo Ninja app"
                width={349}
                height={371}
                className="z-10"
              />

              {/* Floating food elements - placeholder divs or use actual Image if available */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-orange-500 rounded-full opacity-70"></div>
              <div className="absolute bottom-0 left-12 w-20 h-20 bg-yellow-400 rounded-full opacity-70"></div>
              <div className="absolute -top-4 right-8 w-16 h-16 bg-red-500 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Background graphics placeholder */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          {/* Optional decorative graphics */}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Have Questions? We've Got Answers.</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">Is Bogo Ninja free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, it's completely free for all diners. No hidden charges, no subscription fees.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">How do I redeem a deal?</AccordionTrigger>
                <AccordionContent>
                  Just grab the deal from the app and show the code at the restaurant. It's that simple!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Do I need to book a table?</AccordionTrigger>
                <AccordionContent>
                  No, but we recommend checking restaurant timings and availability before visiting.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Are deals city-specific?</AccordionTrigger>
                <AccordionContent>
                  Yes, we show you deals based on your location to ensure you get the most relevant offers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Can I use multiple deals in one visit?</AccordionTrigger>
                <AccordionContent>
                  It depends on restaurant policy — check deal terms for specific conditions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-3">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {/* First Column */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo.png" alt="logo" width={50} height={60} />
                <span className="text-xl font-bold">Bogo Ninja</span>
              </div>
              <p className="text-gray-400 mb-4">
                Your smartest dining companion for <br />
                discovering amazing local deals.
              </p>
              <div className="flex space-x-4 mb-6">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>

            <div className="md:col-span-3 w-full flex flex-wrap justify-between md:flex-none md:grid md:grid-cols-3 md:gap-8">

              {/* Company */}
             <div className="w-[32%] md:w-auto mb-6 md:mb-0">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Company</h4>
                <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                  <li><Link href="#" className="hover:text-white">About Us</Link></li>
                  <li><Link href="#" className="hover:text-white">Contact</Link></li>
                  <li><Link href="#" className="hover:text-white">Careers</Link></li>
                  <li><Link href="#" className="hover:text-white">Press</Link></li>
                </ul>
              </div>

              {/* Support */}
              <div className="w-[32%] md:w-auto mb-6 md:mb-0">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Support</h4>
                <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                  <li><Link href="#" className="hover:text-white">FAQ</Link></li>
                  <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                  <li><Link href="#" className="hover:text-white">Restaurant Login</Link></li>
                  <li><Link href="#" className="hover:text-white">Partner Support</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div className="w-[32%] md:w-auto mb-6 md:mb-0">
                <h4 className="font-semibold mb-2 text-sm md:text-base">Legal</h4>
                <ul className="space-y-1 text-gray-400 text-sm md:text-base">
                  <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                  <li><Link href="#" className="hover:text-white">Cookie Policy</Link></li>
                  <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
                </ul>
              </div>
            </div>


            {/* Fifth Column: App Buttons */}
            <div className="flex flex-col gap-3">
              <div className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2 w-fit">
                <div className="w-25 h-30 rounded">
                  <Image
                    src="/app_store_logo.png"
                    alt="App Store"
                    width={32}
                    height={30}
                  />
                </div>
                <div className="text-left text-white leading-tight">
                  <div className="text-[10px]">Download on the</div>
                  <div className="text-xs font-semibold">App Store</div>
                </div>
              </div>

              <div className="bg-bogo-dark-500 rounded-lg px-3 py-1 flex items-center gap-2 w-fit">
                <div className="w-8 h-8 rounded">
                  <Image
                    src="/play_store_logo.png"
                    alt="Google Play"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="text-left text-white leading-tight">
                  <div className="text-[10px]">Download on the</div>
                  <div className="text-xs font-semibold">Google Play</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-5 text-center text-gray-400">
            <p>&copy; 2025 Bogo Ninja. All rights reserved.</p>
          </div>
        </div>
      </footer>


    </div>
  )

}
