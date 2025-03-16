import { motion } from "framer-motion";
import { ChevronDown, Leaf, Cpu, Battery, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const bikes = [
  {
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Smart Urban Rider",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Eco Explorer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Future Glider",
  },
];

const features = [
  { icon: Leaf, text: "Eco-Friendly Design" },
  { icon: Cpu, text: "Smart Technology" },
  { icon: Battery, text: "Long-lasting Power" },
  { icon: Shield, text: "Advanced Security" },
];

const Hero = () => {
  const [currentBike, setCurrentBike] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBike((prev) => (prev + 1) % bikes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Dynamic Background with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {bikes.map((bike, index) => (
          <motion.div
            key={bike.image}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentBike ? 1 : 0 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url('${bike.image}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="text-white space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Revolutionize
            <br />
            <span className="text-blue-400">Your Ride</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 max-w-xl"
          >
            Experience the perfect fusion of eco-friendly innovation and
            cutting-edge technology with our smart electric bikes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <feature.icon className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Link to="/products">Explore Now</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Right Column - Bike Title */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block text-right"
        >
          <motion.h2
            key={bikes[currentBike].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-white/30"
          >
            {bikes[currentBike].title}
          </motion.h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2,
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
