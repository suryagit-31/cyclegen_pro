import { motion } from "framer-motion";
import { Award, Users, Bike, TreePine } from "lucide-react";
import fitman from "./assets/fitman.png";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users, value: "50K+", label: "Happy Riders" },
  { icon: Bike, value: "100+", label: "Bike Models" },
  { icon: TreePine, value: "1M+", label: "Trees Saved" },
  { icon: Award, value: "25+", label: "Awards" },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              At EcoCycle, we're revolutionizing urban mobility through
              sustainable innovation. Our mission is to create eco-friendly
              transportation solutions that don't compromise on style or
              performance.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2023, we've quickly become a leader in smart electric
              bikes, combining cutting-edge technology with environmental
              consciousnes.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Link to="/">OUR VISON</Link>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={fitman}
              alt="Our workshop"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
