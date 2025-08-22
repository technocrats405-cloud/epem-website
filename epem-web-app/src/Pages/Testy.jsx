import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
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
  Quote,
} from "lucide-react";
import logo from "../assets/logo.jpg";
import pastorImg from "../assets/pastor1.jpg"; // Replace with real pastor image

const Testy = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const [currentVerse, setCurrentVerse] = useState(0);

  // Hero Slides
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
      title: "Rev. Alexander K. Frimpong",
      subtitle: "Campaign For The Unreached and Less Privileged All Over Africa",
      cta: "Learn More",
    },
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Testimonies
  const testimonies = [
    {
      name: "Sister Mary",
      message:
        "Through EPEM, I experienced healing and restoration in my life. Glory be to God!",
    },
    {
      name: "Brother John",
      message:
        "This ministry has transformed my family. The love and prayers we received are immeasurable.",
    },
    {
      name: "Grace",
      message:
        "I came broken but left renewed. Truly, God's presence is in this ministry.",
    },
  ];

  // Bible Verses
  const verses = [
    {
      text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      ref: "Jeremiah 29:11",
    },
    {
      text: "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.",
      ref: "Psalm 23:1-2",
    },
    {
      text: "I can do all things through Christ who strengthens me.",
      ref: "Philippians 4:13",
    },
  ];

  // Auto-rotate testimonies and verses
  useEffect(() => {
    const t = setInterval(() => {
      setCurrentTestimony((prev) => (prev + 1) % testimonies.length);
    }, 6000);
    const v = setInterval(() => {
      setCurrentVerse((prev) => (prev + 1) % verses.length);
    }, 8000);
    return () => {
      clearInterval(t);
      clearInterval(v);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* === Existing Hero Section (unchanged) === */}
      {/* ... KEEP YOUR HERO SECTION CODE AS IS ... */}

      {/* === Bible Verses Section === */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-cyan-50 text-center relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVerse}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Quote className="w-12 h-12 mx-auto text-green-500 mb-4" />
            <p className="text-2xl italic text-gray-700 leading-relaxed">
              "{verses[currentVerse].text}"
            </p>
            <p className="mt-4 text-lg font-semibold text-green-700">
              {verses[currentVerse].ref}
            </p>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* === Pastor Section with Image === */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Pastor Image */}
          <motion.img
            src={pastorImg}
            alt="Senior Pastor"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
          />

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Meet Our Pastor
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Rev. Alexander K. Frimpong is the founder and Senior Pastor of
              Emmanuel Prayer & Evangelistic Ministry (EPEM). His passion for
              spreading the Gospel has touched countless lives across Africa and
              beyond.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Through his vision and leadership, EPEM has grown into a vibrant
              ministry focused on evangelism, prayer, healing, and community
              outreach.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-6 py-3 rounded-lg shadow-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* === Testimonies Popup Section === */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Testimonies</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimony}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-lg p-8 relative"
            >
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "{testimonies[currentTestimony].message}"
              </p>
              <p className="mt-4 font-semibold text-green-700">
                - {testimonies[currentTestimony].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* === Keep your Services, Contact, CTA Sections as is === */}
    </div>
  );
};

export default Testy;
