import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Globe,
  Award,
  Church,
  BookOpen,
  Target,
  Eye,
  HandHeart,
  Star,
  ArrowRight,
  Calendar,
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We embrace everyone with love and show compassion to those in need, following Christ's example of unconditional love.",
      color: "from-red-400 to-pink-500"
    },
    {
      icon: BookOpen,
      title: "Biblical Truth",
      description: "We believe in the authority of God's Word and teach sound biblical doctrine to transform lives.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: HandHeart,
      title: "Service to Others",
      description: "We actively serve our community, helping those in need and reaching out to the less privileged.",
      color: "from-green-400 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Mission",
      description: "Our vision extends beyond borders as we campaign for the unreached across Africa and beyond.",
      color: "from-purple-400 to-blue-500"
    }
  ];

  const milestones = [
    {
      year: "1995",
      title: "Ministry Founded",
      description: "Emmanuel Prayer & Evangelistic Ministry was officially incorporated on June 27, 1995",
      icon: Church
    },
    {
      year: "2000",
      title: "Community Outreach",
      description: "Expanded our mission to include HIV prevention and community health programs",
      icon: Heart
    },
    {
      year: "2010",
      title: "Regional Growth",
      description: "Extended our ministry to multiple regions across Ghana and West Africa",
      icon: Globe
    },
    {
      year: "2020",
      title: "Digital Ministry",
      description: "Launched online services and digital evangelism to reach more souls globally",
      icon: Target
    }
  ];

  const leadership = [
    {
      name: "Rev. Alexander K. of FRIMPONG",
      position: "Senior Pastor & Founder",
      description: "Leading the ministry with passion for over 29 years, devoted to spreading the Gospel and serving the community.",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-cyan-900 via-blue-800 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-32 h-32 border-2 border-cyan-400/30 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bottom-10 left-10 w-24 h-24 border-2 border-green-400/30 rounded-full"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-lg opacity-90 tracking-widest"
            >
              ABOUT US
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Our Story
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              29+ years of faithful service to God and community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-cyan-400 to-green-400 text-white px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
              OUR MISSION
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Transforming Lives Through
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {" "}God's Love
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission Statement</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "Serving the lost, helping those in need of healing care, and engaging in immoral activities to prevent HIV menace"
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Reaching the unreached with the Gospel message</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Providing healing and care to those in need</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <HandHeart className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Community health and HIV prevention programs</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-green-50 to-cyan-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  To be a beacon of hope and transformation, reaching every corner of Africa and beyond with the life-changing message of Jesus Christ.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Eye className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Campaign for the unreached across Africa</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Building strong Christian communities</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Globe className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">Global evangelism and church planting</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-blue-400 to-green-400 text-white px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
              OUR VALUES
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              What We
              <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent">
                {" "}Stand For
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-green-400 to-cyan-400 text-white px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
              OUR JOURNEY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Ministry
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Milestones
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-green-400 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    className={`flex items-center ${isEven ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`w-5/12 ${isEven ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                      >
                        <div className={`flex items-center mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mr-3">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-2xl font-bold text-cyan-600">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full border-4 border-white shadow-lg"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-purple-400 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold inline-block mb-6">
              LEADERSHIP
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Our
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Leadership
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {leadership.map((leader, index) => {
              const Icon = leader.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{leader.name}</h3>
                  <p className="text-lg text-cyan-600 font-semibold mb-4">{leader.position}</p>
                  <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">{leader.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-800 via-blue-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Be part of our journey to transform lives and spread God's love across Africa and beyond
            </p>
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                Join Us Today
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;