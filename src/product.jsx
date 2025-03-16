import { motion } from "framer-motion";
import { useRef } from "react";
import { Battery, Wifi, Zap, Shield } from "lucide-react";
import React from "react";

const products = [
  {
    id: 1,
    name: "EcoRider Pro",
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      { icon: Battery, text: "48h Battery Life" },
      { icon: Wifi, text: "Smart Connect" },
      { icon: Zap, text: "Quick Charge" },
      { icon: Shield, text: "Anti-Theft" },
    ],
    price: "$1,299",
  },
  {
    id: 2,
    name: "Urban Glide X",
    image:
      "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      { icon: Battery, text: "36h Battery Life" },
      { icon: Wifi, text: "GPS Tracking" },
      { icon: Zap, text: "Regenerative Braking" },
      { icon: Shield, text: "Smart Lock" },
    ],
    price: "$999",
  },
  {
    id: 3,
    name: "Mountain Master",
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: [
      { icon: Battery, text: "72h Battery Life" },
      { icon: Wifi, text: "Trail Navigation" },
      { icon: Zap, text: "Dual Motors" },
      { icon: Shield, text: "Weather Resistant" },
    ],
    price: "$1,599",
  },

  {
    id: 4,
    name: "Street Boss",
    image:
      "https://images.unsplash.com/photo-1552549678-1a380a5a428b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: Battery, text: "48h Battery Life" },
      { icon: Wifi, text: "Smart Connect" },
      { icon: Zap, text: "Dual Motors" },
      { icon: Shield, text: "Anti-Theft" },
    ],
    price: "$1,499",
  },
  {
    id: 5,
    name: "The Drift",
    image:
      "https://images.unsplash.com/photo-1608393508049-40db8711fbd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: [
      { icon: Battery, text: "78h Battery Life" },
      { icon: Wifi, text: "Smart Connect" },
      { icon: Zap, text: "Quick Charge" },
      { icon: Shield, text: "Anti-Theft" },
    ],
    price: "$699",
  },
];

const ProductShowcase = () => {
  const containerRef = useRef(null);

  return (
    <section id="products" className="bg-gray-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Our Bikes 
        </motion.h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-64 md:h-72 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {product.name}
                </h3>
              </div>

              {/* Details Section */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {React.createElement(feature.icon, {
                        className: "w-5 h-5 text-blue-600",
                      })}
                      <span className="text-sm text-gray-600">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <button className="px-4 py-2 text-sm md:text-base bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
