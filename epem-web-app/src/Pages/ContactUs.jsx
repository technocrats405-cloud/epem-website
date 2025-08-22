import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Heart,
  Award,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      main: "0242 322 367",
      secondary: "Available 24/7 for prayer requests",
      color: "from-green-400 to-cyan-400",
      bgColor: "from-green-50 to-cyan-50",
      borderColor: "border-green-200"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      main: "Accra, Ghana",
      secondary: "Old RGD Number: G-134, TIN: C0064993280",
      color: "from-blue-400 to-purple-400",
      bgColor: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Award,
      title: "Since 1995",
      main: "29+ Years of Service",
      secondary: "Incorporated: 27/06/1995",
      color: "from-cyan-400 to-blue-400",
      bgColor: "from-cyan-50 to-blue-50",
      borderColor: "border-cyan-200"
    }
  ];

  const socialLinks = [
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/channel/UChE42E2uTEL9yGZUicfkU-Q",
      color: "hover:text-red-500",
      bgColor: "from-red-400 to-red-500"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/share/1ZYXUGe4L5/?mibextid=wwXIfr",
      color: "hover:text-blue-600",
      bgColor: "from-blue-400 to-blue-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/epemofficial?igsh=MXNxOTk0cnZ5aTgzNQ%3D%3D&utm_source=qr",
      color: "hover:text-pink-500",
      bgColor: "from-pink-400 to-purple-500"
    }
  ];

  const officeHours = [
    { day: "Sunday", hours: "11:00 AM - 1:00 PM", service: "Sunday Worship" },
    { day: "Tuesday", hours: "7:00 PM - 9:00 PM", service: "Digging Deep (Bible Study)" },
    { day: "Wednesday", hours: "6:00 PM - 8:00 PM", service: "Faith Clinic" },
    { day: "Mon-Fri", hours: "9:00 AM - 5:00 PM", service: "Office Hours" },
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
              GET IN TOUCH
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Contact Us
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
              We'd love to hear from you. Reach out for prayer, questions, or to join our community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
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
              REACH OUT TO US
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
              Get In
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className={`bg-gradient-to-br ${info.bgColor} p-8 rounded-2xl border ${info.borderColor} text-center hover:shadow-xl transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                  <p className="text-2xl font-bold text-gray-800 mb-2">{info.main}</p>
                  <p className="text-gray-600">{info.secondary}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-gray-800 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative"
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                          placeholder="+233 XX XXX XXXX"
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option value="prayer-request">Prayer Request</option>
                        <option value="join-church">Join Our Church</option>
                        <option value="volunteer">Volunteer Opportunities</option>
                        <option value="counseling">Counseling Services</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none"
                          placeholder="Share your message, prayer request, or inquiry..."
                        />
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-all"
                    >
                      Send Message
                      <Send className="inline w-5 h-5 ml-2" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Office Hours and Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Office Hours */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-cyan-600" />
                  Service Times & Office Hours
                </h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex justify-between items-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg border border-cyan-100"
                    >
                      <div>
                        <p className="font-semibold text-gray-800">{schedule.day}</p>
                        <p className="text-sm text-gray-600">{schedule.service}</p>
                      </div>
                      <p className="text-cyan-600 font-semibold">{schedule.hours}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center p-4 bg-gray-50 hover:bg-gradient-to-r hover:from-gray-100 hover:to-cyan-50 rounded-lg transition-all border border-gray-200 hover:border-cyan-200"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${social.bgColor} rounded-full flex items-center justify-center mr-4`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{social.name}</p>
                          <p className="text-sm text-gray-600">Connect with us</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-red-500" />
                  Emergency Prayer Line
                </h3>
                <p className="text-gray-700 mb-4">
                  Need immediate prayer support? We're here for you 24/7.
                </p>
                <motion.a
                  href="tel:0242322367"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 0242 322 367
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Accra, Ghana
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-cyan-400 via-blue-500 to-green-400 rounded-2xl p-1"
          >
            <div className="bg-white rounded-2xl p-8 text-center">
              <MapPin className="w-24 h-24 text-cyan-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Emmanuel Prayer & Evangelistic Ministry</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Location:</strong> Accra, Ghana</p>
                <p><strong>Registration:</strong> Old RGD Number G-134</p>
                <p><strong>TIN:</strong> C0064993280</p>
                <p><strong>Incorporated:</strong> June 27, 1995</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                Get Directions
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </motion.button>
            </div>
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
              Ready to Connect?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need prayer, want to join our community, or have questions about our ministry
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            >
              Join Our Community
              <ArrowRight className="inline w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;