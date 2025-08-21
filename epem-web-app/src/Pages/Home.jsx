import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ArrowRight
} from 'lucide-react';

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
      subtitle: "Where hearts unite in worship and lives transform through God's love",
      cta: "Join Our Community"
    },
    {
      title: "Experience God's Presence",
      subtitle: "Join us for powerful worship, prayer, and life-changing messages",
      cta: "Watch Live"
    },
    {
      title: "Grow in Faith Together",
      subtitle: "Connect with a loving community that encourages spiritual growth",
      cta: "Get Connected"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "1000+",
      label: "Active Members",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Church,
      number: "15+",
      label: "Years of Ministry",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: Heart,
      number: "500+",
      label: "Lives Transformed",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      number: "50+",
      label: "Ministry Programs",
      color: "from-orange-500 to-red-500"
    }
  ];

  const services = [
    {
      title: "SUNDAY WORSHIP",
      time: "11:00 AM - 1:00 PM",
      description: "Join us for powerful worship and inspiring messages",
      icon: Calendar,
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    },
    {
      title: "DIGGING DEEP",
      time: "7:00 PM - 9:00 PM",
      description: "Tuesday Bible study and prayer meeting",
      icon: BookOpen,
      bgColor: "bg-blue-700",
      hoverColor: "hover:bg-blue-800"
    },
    {
      title: "FAITH CLINIC",
      time: "6:00 PM - 8:00 PM",
      description: "Wednesday evening prayer and healing service",
      icon: Heart,
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-800 to-indigo-900">
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Optional background image placeholder */}
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 0.9, 1]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute bottom-20 left-20 w-24 h-24 border-2 border-green-400/30 rounded-full"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
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
                className="mb-6 text-lg opacity-90"
              >
                WELCOME TO
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-green-400">Emmanuel</span> Prayer &<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Evangelistic Ministry
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto"
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
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
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

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
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
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-green-400 text-black px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
                WELCOME TO THE EPEM CHURCH
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                A Place Where Hearts Are <span className="text-blue-600">United</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Welcome to Emmanuel Prayer and Evangelistic Ministry (EPEM), where hearts are 
                united in worship and lives are transformed by the power of the Gospel. We 
                embrace everyone with love, encourage spiritual growth and passionately share 
                the message of hope and salvation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-lg font-semibold">
                  [Church Community Image]
                </div>
                <motion.div 
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-xl opacity-80"
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
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
                    rotateY: 5
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

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Plan Your Visit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-800 transition-all"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;