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

export default function BogoNinjaLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-bogo-orange-50 to-bogo-dark-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-bogo-orange-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-lg flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-bogo-orange-600 to-bogo-dark-600 bg-clip-text text-transparent">
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
                className="bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 hover:from-bogo-orange-600 hover:to-bogo-dark-600"
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
                  className="bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 w-full"
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
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Grab Exciting{" "}
                  <span className="bg-gradient-to-r from-bogo-orange-600 to-bogo-dark-600 bg-clip-text text-transparent">
                    Local Deals
                  </span>
                  . Eat More, Pay Less.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Discover coupons and exclusive discounts from restaurants near you — 100% free, forever!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 hover:from-bogo-orange-600 hover:to-bogo-dark-600 text-lg px-8 py-6"
                  onClick={() => scrollToSection("deals")}
                >
                  Browse Top Deals
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-bogo-orange-300 text-bogo-orange-600 hover:bg-bogo-orange-50 text-lg px-8 py-6 bg-transparent"
                  onClick={() => scrollToSection("partners")}
                >
                  I'm a Restaurant
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <Badge className="bg-bogo-dark-100 text-bogo-dark-800 px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  100% Free for Customers
                </Badge>
                <Badge className="bg-bogo-orange-100 text-bogo-orange-800 px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  No Hidden Charges
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 text-sm">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Redeem Instantly
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Happy diners using Bogo Ninja app"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-bogo-orange-400 to-bogo-dark-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-bogo-dark-400 to-bogo-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Restaurants You Know & Love</h2>
            <p className="text-gray-600 text-lg">Trusted by top dining destinations across India</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=120&query=restaurant logo ${i}`}
                  alt={`Restaurant Partner ${i}`}
                  width={120}
                  height={80}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
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
      <section className="py-16 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Join India's Fastest Growing Dining Deal Network</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Utensils className="w-12 h-12" />
              </div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">Restaurants Partnered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12" />
              </div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-lg opacity-90">Happy Diners</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <MapPin className="w-12 h-12" />
              </div>
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-lg opacity-90">Cities Covered</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Gift className="w-12 h-12" />
              </div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-lg opacity-90">Deals Redeemed</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Bogo Ninja Works</h2>
            <p className="text-gray-600 text-lg">Get started in just 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Download & Sign Up</h3>
              <p className="text-gray-600">Create your account in seconds and start exploring</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Find Nearby Deals</h3>
              <p className="text-gray-600">Explore restaurants near you with live offers</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Grab a Coupon</h3>
              <p className="text-gray-600">Tap, save, and show at restaurant</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Redeem & Dine</h3>
              <p className="text-gray-600">Enjoy discounts on your favorite meals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Your Smartest Dining Companion</h2>
            <p className="text-gray-600 text-lg">Everything you need for the perfect dining experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <DollarSign className="w-12 h-12 text-bogo-dark-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Save Money Every Meal</h3>
                <p className="text-gray-600">Big savings with zero cost to you</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Smartphone className="w-12 h-12 text-bogo-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Seamless App Experience</h3>
                <p className="text-gray-600">Just tap, grab, and dine</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <MapPin className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Offers</h3>
                <p className="text-gray-600">Personalized deals near your current location</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Clock className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Redemption</h3>
                <p className="text-gray-600">No waiting, no confusion</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <CheckCircle className="w-12 h-12 text-bogo-dark-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Free Forever</h3>
                <p className="text-gray-600">No fees, no subscriptions</p>
              </CardContent>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <Shield className="w-12 h-12 text-red-500 mb-4" />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                restaurant: "Pizza Palace",
                deal: "Buy 1 Get 1 Free",
                location: "Connaught Place",
                discount: "50% OFF",
              },
              {
                restaurant: "Burger Junction",
                deal: "20% Off on All Combos",
                location: "Karol Bagh",
                discount: "20% OFF",
              },
              {
                restaurant: "Spice Garden",
                deal: "Free Dessert with Main Course",
                location: "Lajpat Nagar",
                discount: "FREE DESSERT",
              },
              {
                restaurant: "Coffee Corner",
                deal: "Buy 2 Get 1 Free Coffee",
                location: "Khan Market",
                discount: "33% OFF",
              },
              { restaurant: "Taco Fiesta", deal: "30% Off on Weekdays", location: "Saket", discount: "30% OFF" },
              {
                restaurant: "Sushi Express",
                deal: "15% Off + Free Delivery",
                location: "Gurgaon",
                discount: "15% OFF",
              },
            ].map((deal, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&query=${deal.restaurant} food`}
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
                  <Button className="w-full bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 hover:from-bogo-orange-600 hover:to-bogo-dark-600">
                    Grab Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Diners Love Bogo Ninja</h2>
            <p className="text-gray-600 text-lg">Real stories from our happy customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-bogo-orange-400 to-bogo-dark-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    SP
                  </div>
                  <div>
                    <h4 className="font-semibold">Sonal P.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "I've saved hundreds eating out — Bogo Ninja makes it guilt-free to dine out often!"
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-bogo-dark-400 to-bogo-orange-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    AM
                  </div>
                  <div>
                    <h4 className="font-semibold">Akshay M.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Simple, easy, and free. I always check Bogo Ninja before eating out."
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-bogo-orange-400 to-bogo-dark-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    AD
                  </div>
                  <div>
                    <h4 className="font-semibold">Anjali D.</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-gray-300" />
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Great offers from restaurants I already visit. No gimmicks, just real savings."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Restaurant Partner Section */}
      <section id="partners" className="py-16 bg-gradient-to-r from-bogo-dark-600 to-bogo-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Are You a Restaurant? Let's Grow Together.</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Get discovered by thousands of nearby diners — without spending a rupee. Bogo Ninja helps you increase
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

          <div className="text-center">
            <Button size="lg" className="bg-white text-bogo-dark-600 hover:bg-gray-100 text-lg px-8 py-6">
              Become a Partner – Start for Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section id="download" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold mb-4">Start Saving Instantly</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Download the Bogo Ninja app and start discovering amazing deals near you
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                  <Download className="mr-2 w-5 h-5" />
                  Download on App Store
                </Button>
                <Button size="lg" className="bg-bogo-dark-600 text-white hover:bg-bogo-dark-700">
                  <Download className="mr-2 w-5 h-5" />
                  Get it on Google Play
                </Button>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-3xl font-bold mb-4">Get More Diners, Every Day</h3>
              <p className="text-gray-600 mb-6 text-lg">Join our restaurant partner network and grow your business</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 hover:from-bogo-orange-600 hover:to-bogo-dark-600 text-lg px-8 py-6"
              >
                Become a Partner
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-bogo-orange-500 to-bogo-dark-500 rounded-lg flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Bogo Ninja</span>
              </div>
              <p className="text-gray-400 mb-4">Your smartest dining companion for discovering amazing local deals.</p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Restaurant Login
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Partner Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bogo Ninja. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
  
}
