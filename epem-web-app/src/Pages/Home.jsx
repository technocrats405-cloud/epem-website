import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Heart,
  BookOpen,
  Play,
  ChevronRight,
  Users,
  Church,
  Award,
  ArrowRight,
  Youtube,
  Facebook,
  Instagram,
  Globe,
} from "lucide-react";
import logo from '../assets/logo.jpg'; // Adjust the path as necessary

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "Emmanuel Prayer & Evangelistic Ministry",
      subtitle:
        "Serving the lost, helping those in need of healing care, and engaging in immoral activities to prevent HIV menace",
      cta: "Join Our Community",
    },
    {
      title: "Experience God's Presence",
      subtitle:
        "Join us for powerful worship, prayer, and life-changing messages every Sunday",
      cta: "Watch Live",
    },
    {
      title: "Rev. Alexander K. of FRIMPONG",
      subtitle: "Campaign For The Unreached and Less Privilege All Over Africa",
      cta: "Learn More",
    },
  ];

  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Active Members",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: Church,
      number: "15+",
      label: "Years of Ministry",
      color: "from-green-400 to-cyan-500",
    },
    {
      icon: Heart,
      number: "500+",
      label: "Lives Transformed",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Globe,
      number: "10+",
      label: "Countries Reached",
      color: "from-cyan-500 to-green-400",
    },
  ];

  const services = [
    {
      title: "SUNDAY WORSHIP",
      time: "11:00 AM - 1:00 PM",
      description: "Join us for powerful worship and inspiring messages",
      icon: Calendar,
      bgColor: "bg-cyan-600",
      hoverColor: "hover:bg-cyan-700",
    },
    {
      title: "DIGGING DEEP",
      time: "7:00 PM - 9:00 PM",
      description: "Tuesday Bible study and prayer meeting",
      icon: BookOpen,
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800",
    },
    {
      title: "FAITH CLINIC",
      time: "6:00 PM - 8:00 PM",
      description: "Wednesday evening prayer and healing service",
      icon: Heart,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700",
    },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      url: "https://www.youtube.com/channel/UChE42E2uTEL9yGZUicfkU-Q",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50",
    },
    {
      icon: Facebook,
      url: "https://www.facebook.com/share/1ZYXUGe4L5/?mibextid=wwXIfr",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/epemofficial?igsh=MXNxOTk0cnZ5aTgzNQ%3D%3D&utm_source=qr",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-800 to-green-700">
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Optional background image placeholder */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* EPEM Logo colors inspired floating elements */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-cyan-400/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
              x: [0, -40, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-20 left-20 w-24 h-24 border-2 border-green-400/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: 180,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-1/3 left-1/4 w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-green-400/20 rounded-full blur-sm"
          />
        </div>

        {/* Church Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-8 left-8 z-20"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-green-400 rounded-full flex items-center justify-center shadow-lg">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-white font-bold text-sm"
            >
              <img src={logo}></img>
            </motion.div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 text-lg opacity-90 tracking-widest"
              >
                WELCOME TO
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Emmanuel
                </span>{" "}
                Prayer &<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Evangelistic Ministry
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                >
                  {heroSlides[currentSlide].cta}
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all"
                >
                  <Play className="inline w-5 h-5 mr-2" />
                  Watch Live
                </motion.button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20"
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white ${social.color} ${social.bgColor} transition-all duration-300 border border-white/20`}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-gradient-to-r from-cyan-400 to-green-400 scale-125"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <motion.h3
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    className="text-3xl font-bold text-gray-800 mb-2"
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
                WELCOME TO THE EPEM CHURCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                A Place Where Hearts Are{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  United
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Welcome to Emmanuel Prayer and Evangelistic Ministry (EPEM),
                where hearts are united in worship and lives are transformed by
                the power of the Gospel. We embrace everyone with love,
                encourage spiritual growth and passionately share the message of
                hope and salvation.
              </p>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border border-cyan-200 mb-8">
                <h3 className="font-bold text-gray-800 mb-3">Our Mission:</h3>
                <p className="text-gray-600 italic">
                  "Serving the lost, helping those in need of healing care, and
                  engaging in immoral activities to prevent HIV menace"
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                Learn More About Us
                <ChevronRight className="inline w-5 h-5 ml-2" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Pastor's Photo Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-green-400 rounded-2xl flex items-center justify-center text-white text-lg font-semibold shadow-xl overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                      <Church className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-xl font-bold">
                      Rev. Alexander K. of FRIMPONG
                    </p>
                    <p className="text-sm opacity-90 mt-2">
                      Senior Pastor & Founder
                    </p>
                  </div>
                </motion.div>

                {/* Floating contact info */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-cyan-100"
                >
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-800">
                      0242 322 367
                    </p>
                    <p className="text-xs text-gray-600">Call us anytime</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl opacity-80"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for inspiring worship experiences throughout the week
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className={`${service.bgColor} ${service.hoverColor} text-white p-8 rounded-2xl transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <div className="flex items-center justify-center mb-4">
                      <Clock className="w-4 h-4 mr-2" />
                      <p className="text-lg opacity-90">{service.time}</p>
                    </div>
                    <p className="opacity-80 mb-6">{service.description}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full transition-all backdrop-blur-sm"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Visit Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to welcome you to our church family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <MapPin className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Our Location
              </h3>
              <p className="text-gray-600 mb-2">Old RGD Number: G-134</p>
              <p className="text-gray-600 mb-2">TIN: C0064993280</p>
              <p className="text-gray-600">Accra, Ghana</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-full transition-all"
              >
                Get Directions
              </motion.button>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-2xl border border-green-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Phone className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
              <p className="text-2xl font-bold text-gray-800 mb-2">
                0242 322 367
              </p>
              <p className="text-gray-600 mb-4">
                Available 24/7 for prayer requests
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white px-6 py-2 rounded-full transition-all"
              >
                Call Now
              </motion.button>
            </motion.div>

            {/* Incorporation Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 text-center group hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Official Registration
              </h3>
              <p className="text-gray-600 mb-2">Incorporated: 27/06/1995</p>
              <p className="text-gray-600 mb-2">Registration: G-134</p>
              <p className="text-gray-600">Officially Registered Ministry</p>
              <div className="mt-4 px-4 py-2 bg-blue-100 rounded-full inline-block">
                <span className="text-blue-700 text-sm font-semibold">
                  29+ Years of Service
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-800 via-blue-800 to-green-800 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-20 -right-20 w-80 h-80 border border-white/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-20 -left-20 w-60 h-60 border border-cyan-400/20 rounded-full"
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Take the first step in your spiritual journey with us
            </p>
            <div className="flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Join Now
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
